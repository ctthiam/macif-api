import { Injectable, BadRequestException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PrismaService } from '../prisma/prisma.service';

const SUBSCRIPTION_PRICE = 10000; // 10 000 FCFA/mois
const TRIAL_DAYS = 30;

@Injectable()
export class SubscriptionsService {
  constructor(
    private prisma: PrismaService,
    private config: ConfigService,
  ) {}

  async getStatus(shopId: number) {
    const shop = await this.prisma.shop.findUnique({
      where: { id: shopId },
      include: {
        subscriptions: {
          orderBy: { expiresAt: 'desc' },
          take: 1,
        },
      },
    });

    if (!shop) throw new BadRequestException('Boutique introuvable');

    const now = new Date();
    const trialEndsAt = new Date(shop.createdAt);
    trialEndsAt.setDate(trialEndsAt.getDate() + TRIAL_DAYS);

    const lastSub = shop.subscriptions[0];
    const isInTrial = now < trialEndsAt && !lastSub;
    const hasActiveSub = lastSub && new Date(lastSub.expiresAt) > now;
    const isActive = isInTrial || hasActiveSub;

    const daysLeft = isInTrial
      ? Math.max(0, Math.ceil((trialEndsAt.getTime() - now.getTime()) / 86400000))
      : hasActiveSub
      ? Math.max(0, Math.ceil((new Date(lastSub.expiresAt).getTime() - now.getTime()) / 86400000))
      : 0;

    return {
      isActive,
      isInTrial,
      hasActiveSub: !!hasActiveSub,
      daysLeft,
      trialEndsAt: isInTrial ? trialEndsAt : null,
      lastSubscription: lastSub ?? null,
      price: SUBSCRIPTION_PRICE,
    };
  }

  async initiatePayment(shopId: number, userId: number, returnUrl: string) {
    const masterKey = this.config.get('PAYDUNYA_MASTER_KEY');
    const privateKey = this.config.get('PAYDUNYA_PRIVATE_KEY');
    const token = this.config.get('PAYDUNYA_TOKEN');
    const mode = this.config.get('PAYDUNYA_MODE') ?? 'test';

    if (!masterKey || !privateKey || !token) {
      throw new BadRequestException('PayDunya non configuré. Contactez le support.');
    }

    const baseUrl =
      mode === 'live'
        ? 'https://app.paydunya.com/api/v1'
        : 'https://app.paydunya.com/sandbox-api/v1';

    const shop = await this.prisma.shop.findUnique({ where: { id: shopId } });
    const ref = `MACIF-SUB-${shopId}-${Date.now()}`;

    const payload = {
      invoice: {
        total_amount: SUBSCRIPTION_PRICE,
        description: `Abonnement MACIF 1 mois — ${shop?.name}`,
      },
      store: {
        name: 'MACIF',
        tagline: 'Gestion de quincaillerie',
      },
      actions: {
        cancel_url: `${returnUrl}?status=cancelled`,
        return_url: `${returnUrl}?status=success`,
        callback_url: `${this.config.get('API_URL') ?? 'http://localhost:4000'}/api/subscriptions/webhook`,
      },
      custom_data: {
        shop_id: shopId,
        user_id: userId,
        ref,
      },
    };

    const response = await fetch(`${baseUrl}/checkout-invoice/create`, {
      method: 'POST',
      headers: {
        'PAYDUNYA-MASTER-KEY': masterKey,
        'PAYDUNYA-PRIVATE-KEY': privateKey,
        'PAYDUNYA-TOKEN': token,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    const data = await response.json() as any;

    if (!data.response_code || data.response_code !== '00') {
      throw new BadRequestException(data.response_text ?? 'Erreur PayDunya');
    }

    return {
      paymentUrl: data.response_text,
      token: data.token,
      ref,
    };
  }

  async handleWebhook(data: any) {
    const token = data?.data?.bill?.token;
    if (!token) return;

    const masterKey = this.config.get('PAYDUNYA_MASTER_KEY');
    const privateKey = this.config.get('PAYDUNYA_PRIVATE_KEY');
    const apiToken = this.config.get('PAYDUNYA_TOKEN');
    const mode = this.config.get('PAYDUNYA_MODE') ?? 'test';
    const baseUrl =
      mode === 'live'
        ? 'https://app.paydunya.com/api/v1'
        : 'https://app.paydunya.com/sandbox-api/v1';

    const verify = await fetch(`${baseUrl}/checkout-invoice/confirm/${token}`, {
      headers: {
        'PAYDUNYA-MASTER-KEY': masterKey!,
        'PAYDUNYA-PRIVATE-KEY': privateKey!,
        'PAYDUNYA-TOKEN': apiToken!,
      },
    });
    const result = await verify.json() as any;

    if (result.status !== 'completed') return;

    const shopId = result.custom_data?.shop_id;
    if (!shopId) return;

    const startsAt = new Date();
    const expiresAt = new Date();
    expiresAt.setDate(expiresAt.getDate() + 30);

    await this.prisma.subscription.create({
      data: {
        shopId: Number(shopId),
        amount: SUBSCRIPTION_PRICE,
        paymentRef: token,
        startsAt,
        expiresAt,
      },
    });
  }

  async getHistory(shopId: number) {
    return this.prisma.subscription.findMany({
      where: { shopId },
      orderBy: { createdAt: 'desc' },
      take: 12,
    });
  }
}

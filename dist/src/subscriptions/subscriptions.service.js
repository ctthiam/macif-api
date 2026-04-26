"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubscriptionsService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const prisma_service_1 = require("../prisma/prisma.service");
const SUBSCRIPTION_PRICE = 10000;
const TRIAL_DAYS = 30;
let SubscriptionsService = class SubscriptionsService {
    constructor(prisma, config) {
        this.prisma = prisma;
        this.config = config;
    }
    async getStatus(shopId) {
        const shop = await this.prisma.shop.findUnique({
            where: { id: shopId },
            include: {
                subscriptions: {
                    orderBy: { expiresAt: 'desc' },
                    take: 1,
                },
            },
        });
        if (!shop)
            throw new common_1.BadRequestException('Boutique introuvable');
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
    async initiatePayment(shopId, userId, returnUrl) {
        const masterKey = this.config.get('PAYDUNYA_MASTER_KEY');
        const privateKey = this.config.get('PAYDUNYA_PRIVATE_KEY');
        const token = this.config.get('PAYDUNYA_TOKEN');
        const mode = this.config.get('PAYDUNYA_MODE') ?? 'test';
        if (!masterKey || !privateKey || !token) {
            throw new common_1.BadRequestException('PayDunya non configuré. Contactez le support.');
        }
        const baseUrl = mode === 'live'
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
        const data = await response.json();
        if (!data.response_code || data.response_code !== '00') {
            throw new common_1.BadRequestException(data.response_text ?? 'Erreur PayDunya');
        }
        return {
            paymentUrl: data.response_text,
            token: data.token,
            ref,
        };
    }
    async handleWebhook(data) {
        const token = data?.data?.bill?.token;
        if (!token)
            return;
        const masterKey = this.config.get('PAYDUNYA_MASTER_KEY');
        const privateKey = this.config.get('PAYDUNYA_PRIVATE_KEY');
        const apiToken = this.config.get('PAYDUNYA_TOKEN');
        const mode = this.config.get('PAYDUNYA_MODE') ?? 'test';
        const baseUrl = mode === 'live'
            ? 'https://app.paydunya.com/api/v1'
            : 'https://app.paydunya.com/sandbox-api/v1';
        const verify = await fetch(`${baseUrl}/checkout-invoice/confirm/${token}`, {
            headers: {
                'PAYDUNYA-MASTER-KEY': masterKey,
                'PAYDUNYA-PRIVATE-KEY': privateKey,
                'PAYDUNYA-TOKEN': apiToken,
            },
        });
        const result = await verify.json();
        if (result.status !== 'completed')
            return;
        const shopId = result.custom_data?.shop_id;
        if (!shopId)
            return;
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
    async getHistory(shopId) {
        return this.prisma.subscription.findMany({
            where: { shopId },
            orderBy: { createdAt: 'desc' },
            take: 12,
        });
    }
};
exports.SubscriptionsService = SubscriptionsService;
exports.SubscriptionsService = SubscriptionsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        config_1.ConfigService])
], SubscriptionsService);
//# sourceMappingURL=subscriptions.service.js.map
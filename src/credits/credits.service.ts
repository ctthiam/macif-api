import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { PayCreditDto } from './dto/credit.dto';

@Injectable()
export class CreditsService {
  constructor(private prisma: PrismaService) {}

  findAll(shopId: number, customerId?: number) {
    return this.prisma.credit.findMany({
      where: {
        shopId,
        ...(customerId ? { customerId } : {}),
        status: { in: ['open', 'partial', 'overdue'] },
      },
      include: {
        customer: { select: { id: true, name: true, phone: true } },
        payments: { orderBy: { createdAt: 'desc' }, take: 5 },
      },
      orderBy: { createdAt: 'desc' },
    });
  }

  async pay(shopId: number, userId: number, creditId: number, dto: PayCreditDto) {
    const credit = await this.prisma.credit.findFirst({
      where: { id: creditId, shopId },
    });

    if (!credit) throw new NotFoundException('Crédit introuvable');
    if (credit.status === 'paid') throw new BadRequestException('Ce crédit est déjà soldé');

    const remaining = Number(credit.amountRemaining);
    if (dto.amount > remaining) {
      throw new BadRequestException(
        `Montant trop élevé. Restant: ${remaining} FCFA`,
      );
    }

    const newPaid = Number(credit.amountPaid) + dto.amount;
    const newRemaining = remaining - dto.amount;
    const newStatus = newRemaining <= 0 ? 'paid' : 'partial';

    return this.prisma.$transaction(async (tx) => {
      const updated = await tx.credit.update({
        where: { id: creditId },
        data: {
          amountPaid: newPaid,
          amountRemaining: newRemaining,
          status: newStatus as any,
          payments: {
            create: {
              amount: dto.amount,
              paymentMethod: (dto.paymentMethod ?? 'cash') as any,
              userId,
              note: dto.note,
            },
          },
        },
      });

      // Mettre à jour le solde crédit du client
      await tx.customer.update({
        where: { id: credit.customerId },
        data: { creditBalance: { decrement: dto.amount } },
      });

      return updated;
    });
  }
}

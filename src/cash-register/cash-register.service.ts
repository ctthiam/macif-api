import { Injectable, BadRequestException, ConflictException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { OpenCashRegisterDto, CloseCashRegisterDto } from './dto/cash-register.dto';

@Injectable()
export class CashRegisterService {
  constructor(private prisma: PrismaService) {}

  private todayDate() {
    const d = new Date();
    return new Date(d.getFullYear(), d.getMonth(), d.getDate());
  }

  async getToday(shopId: number) {
    const date = this.todayDate();

    const register = await this.prisma.cashRegister.findUnique({
      where: { shopId_date: { shopId, date } },
      include: { user: { select: { id: true, name: true } } },
    });

    if (!register) {
      return null;
    }

    // Calcul des espèces encaissées aujourd'hui (ventes cash)
    const start = new Date(date);
    const end = new Date(date);
    end.setDate(end.getDate() + 1);

    const [cashSales, expenses] = await Promise.all([
      this.prisma.sale.aggregate({
        where: {
          shopId,
          paymentMethod: 'cash',
          createdAt: { gte: start, lt: end },
        },
        _sum: { netAmount: true },
      }),
      this.prisma.expense.aggregate({
        where: {
          shopId,
          date: { gte: start, lt: end },
        },
        _sum: { amount: true },
      }),
    ]);

    const cashIn = Number(cashSales._sum.netAmount ?? 0);
    const totalExpenses = Number(expenses._sum.amount ?? 0);
    const theoretical =
      Number(register.openingAmount) + cashIn - totalExpenses;

    return { ...register, cashIn, totalExpenses, theoretical };
  }

  async open(shopId: number, userId: number, dto: OpenCashRegisterDto) {
    const date = this.todayDate();

    const existing = await this.prisma.cashRegister.findUnique({
      where: { shopId_date: { shopId, date } },
    });

    if (existing) {
      throw new ConflictException('La caisse est déjà ouverte aujourd\'hui');
    }

    return this.prisma.cashRegister.create({
      data: {
        shopId,
        userId,
        date,
        openingAmount: dto.openingAmount,
        status: 'open',
        notes: dto.notes,
      },
    });
  }

  async close(shopId: number, dto: CloseCashRegisterDto) {
    const date = this.todayDate();

    const register = await this.prisma.cashRegister.findUnique({
      where: { shopId_date: { shopId, date } },
    });

    if (!register) throw new BadRequestException('Aucune caisse ouverte aujourd\'hui');
    if (register.status === 'closed') throw new BadRequestException('La caisse est déjà fermée');

    const start = new Date(date);
    const end = new Date(date);
    end.setDate(end.getDate() + 1);

    const [cashSales, expenses] = await Promise.all([
      this.prisma.sale.aggregate({
        where: { shopId, paymentMethod: 'cash', createdAt: { gte: start, lt: end } },
        _sum: { netAmount: true },
      }),
      this.prisma.expense.aggregate({
        where: { shopId, date: { gte: start, lt: end } },
        _sum: { amount: true },
      }),
    ]);

    const theoretical =
      Number(register.openingAmount) +
      Number(cashSales._sum.netAmount ?? 0) -
      Number(expenses._sum.amount ?? 0);

    const difference = dto.closingAmount - theoretical;

    return this.prisma.cashRegister.update({
      where: { id: register.id },
      data: {
        closingAmount: dto.closingAmount,
        theoreticalAmount: theoretical,
        difference,
        status: 'closed',
        notes: dto.notes ?? register.notes,
      },
    });
  }

  async getHistory(shopId: number, limit = 30) {
    return this.prisma.cashRegister.findMany({
      where: { shopId },
      orderBy: { date: 'desc' },
      take: limit,
      include: { user: { select: { name: true } } },
    });
  }
}

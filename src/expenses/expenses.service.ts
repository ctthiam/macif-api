import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateExpenseDto } from './dto/expense.dto';

@Injectable()
export class ExpensesService {
  constructor(private prisma: PrismaService) {}

  async create(shopId: number, userId: number, dto: CreateExpenseDto) {
    const date = dto.date ? new Date(dto.date) : new Date();
    const dateOnly = new Date(date.getFullYear(), date.getMonth(), date.getDate());

    return this.prisma.expense.create({
      data: {
        shopId,
        userId,
        category: dto.category as any,
        amount: dto.amount,
        description: dto.description,
        date: dateOnly,
        isRecurring: dto.isRecurring ?? false,
        recurDay: dto.recurDay,
      },
    });
  }

  async findAll(
    shopId: number,
    opts: { startDate?: string; endDate?: string; category?: string; page?: number; limit?: number },
  ) {
    const page = opts.page ?? 1;
    const limit = opts.limit ?? 30;
    const skip = (page - 1) * limit;

    const where: any = { shopId };
    if (opts.startDate || opts.endDate) {
      where.date = {};
      if (opts.startDate) where.date.gte = new Date(opts.startDate);
      if (opts.endDate) {
        const end = new Date(opts.endDate);
        end.setDate(end.getDate() + 1);
        where.date.lt = end;
      }
    }
    if (opts.category) where.category = opts.category;

    const [items, total] = await Promise.all([
      this.prisma.expense.findMany({
        where,
        orderBy: { date: 'desc' },
        skip,
        take: limit,
        include: { user: { select: { name: true } } },
      }),
      this.prisma.expense.count({ where }),
    ]);

    const totalAmount = await this.prisma.expense.aggregate({
      where,
      _sum: { amount: true },
    });

    return {
      items,
      total,
      page,
      pages: Math.ceil(total / limit),
      totalAmount: Number(totalAmount._sum.amount ?? 0),
    };
  }

  async remove(shopId: number, id: number) {
    const expense = await this.prisma.expense.findFirst({ where: { id, shopId } });
    if (!expense) throw new NotFoundException('Dépense introuvable');
    return this.prisma.expense.delete({ where: { id } });
  }
}

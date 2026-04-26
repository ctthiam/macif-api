import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ReportsService {
  constructor(private prisma: PrismaService) {}

  async getDashboard(shopId: number) {
    const todayStart = new Date();
    todayStart.setHours(0, 0, 0, 0);

    const monthStart = new Date();
    monthStart.setDate(1);
    monthStart.setHours(0, 0, 0, 0);

    const prevMonthStart = new Date(monthStart);
    prevMonthStart.setMonth(prevMonthStart.getMonth() - 1);

    const [
      todaySales,
      monthSales,
      prevMonthSales,
      openCredits,
      cashRegister,
      lowStockProducts,
      recentSales,
    ] = await Promise.all([
      // Ventes du jour
      this.prisma.sale.findMany({
        where: { shopId, createdAt: { gte: todayStart } },
        select: { netAmount: true, paymentMethod: true },
      }),
      // Ventes ce mois
      this.prisma.sale.aggregate({
        where: { shopId, createdAt: { gte: monthStart } },
        _sum: { netAmount: true },
      }),
      // Ventes mois précédent
      this.prisma.sale.aggregate({
        where: { shopId, createdAt: { gte: prevMonthStart, lt: monthStart } },
        _sum: { netAmount: true },
      }),
      // Créances ouvertes
      this.prisma.credit.aggregate({
        where: { shopId, status: { in: ['open', 'partial', 'overdue'] } },
        _sum: { amountRemaining: true },
        _count: true,
      }),
      // Caisse du jour
      this.prisma.cashRegister.findFirst({
        where: { shopId, date: { gte: todayStart } },
        orderBy: { createdAt: 'desc' },
      }),
      // Produits en rupture
      this.prisma.product.findMany({
        where: { shopId, isActive: true, deletedAt: null },
        select: { id: true, name: true, stockQty: true, stockAlert: true, unit: true },
      }),
      // 5 dernières ventes
      this.prisma.sale.findMany({
        where: { shopId },
        include: {
          items: { include: { product: { select: { name: true } } }, take: 1 },
          customer: { select: { name: true } },
        },
        orderBy: { createdAt: 'desc' },
        take: 5,
      }),
    ]);

    const todayRevenue = todaySales.reduce((s, v) => s + Number(v.netAmount), 0);
    const todayCash = todaySales
      .filter((s) => s.paymentMethod === 'cash')
      .reduce((s, v) => s + Number(v.netAmount), 0);

    const lowStock = lowStockProducts.filter(
      (p) => Number(p.stockQty) <= Number(p.stockAlert),
    );

    return {
      todayRevenue,
      todaySalesCount: todaySales.length,
      todayByMethod: todaySales.reduce((acc: any, s) => {
        acc[s.paymentMethod] = (acc[s.paymentMethod] ?? 0) + Number(s.netAmount);
        return acc;
      }, {}),
      cashBalance: Number(cashRegister?.openingAmount ?? 0) + todayCash,
      monthRevenue: Number(monthSales._sum.netAmount ?? 0),
      prevMonthRevenue: Number(prevMonthSales._sum.netAmount ?? 0),
      totalCredits: Number(openCredits._sum.amountRemaining ?? 0),
      creditCount: openCredits._count,
      lowStockCount: lowStock.length,
      lowStockProducts: lowStock.slice(0, 5),
      recentSales,
    };
  }

  async getDaily(shopId: number, date?: string) {
    const day = date ? new Date(date) : new Date();
    const start = new Date(day);
    start.setHours(0, 0, 0, 0);
    const end = new Date(day);
    end.setHours(23, 59, 59, 999);

    const [sales, expenses] = await Promise.all([
      this.prisma.sale.findMany({
        where: { shopId, createdAt: { gte: start, lte: end } },
        include: { items: { include: { product: { select: { name: true } } } } },
      }),
      this.prisma.expense.findMany({
        where: { shopId, date: { gte: start, lte: end } },
      }),
    ]);

    const revenue = sales.reduce((s, v) => s + Number(v.netAmount), 0);
    const totalExpenses = expenses.reduce((s, v) => s + Number(v.amount), 0);

    return {
      date: start.toISOString().split('T')[0],
      revenue,
      salesCount: sales.length,
      expenses: totalExpenses,
      profit: revenue - totalExpenses,
      sales,
      expensesList: expenses,
    };
  }

  async getMonthly(shopId: number, year?: number, month?: number) {
    const now = new Date();
    const y = year ?? now.getFullYear();
    const m = month ? month - 1 : now.getMonth();

    const start = new Date(y, m, 1);
    const end = new Date(y, m + 1, 0, 23, 59, 59);

    const [salesByMethod, expenses, topProducts] = await Promise.all([
      this.prisma.sale.groupBy({
        by: ['paymentMethod'],
        where: { shopId, createdAt: { gte: start, lte: end } },
        _sum: { netAmount: true },
        _count: { id: true },
      }),
      this.prisma.expense.aggregate({
        where: { shopId, date: { gte: start, lte: end } },
        _sum: { amount: true },
      }),
      this.prisma.saleItem.groupBy({
        by: ['productId'],
        where: { sale: { shopId, createdAt: { gte: start, lte: end } } },
        _sum: { totalPrice: true, quantity: true },
        orderBy: { _sum: { totalPrice: 'desc' } },
        take: 5,
      }),
    ]);

    const totalRevenue = salesByMethod.reduce((s, g) => s + Number(g._sum.netAmount ?? 0), 0);
    const totalSales = salesByMethod.reduce((s, g) => s + (g._count.id ?? 0), 0);
    const byMethod: Record<string, number> = {};
    salesByMethod.forEach((g) => {
      byMethod[g.paymentMethod] = Number(g._sum.netAmount ?? 0);
    });

    // Enrichir top produits (shape plate attendue par le frontend)
    const productIds = topProducts.map((p) => p.productId);
    const productNames = await this.prisma.product.findMany({
      where: { id: { in: productIds } },
      select: { id: true, name: true, unit: true },
    });
    const nameMap = new Map(productNames.map((p) => [p.id, p]));

    return {
      month: m + 1,
      year: y,
      totalRevenue,
      totalSales,
      cashRevenue: byMethod['cash'] ?? 0,
      waveRevenue: byMethod['wave'] ?? 0,
      orangeMoneyRevenue: byMethod['orange_money'] ?? 0,
      creditRevenue: byMethod['credit'] ?? 0,
      expenses: Number(expenses._sum.amount ?? 0),
      profit: totalRevenue - Number(expenses._sum.amount ?? 0),
      topProducts: topProducts.map((p) => {
        const prod = nameMap.get(p.productId);
        return {
          name: prod?.name ?? 'Produit supprimé',
          unit: prod?.unit ?? '',
          totalRevenue: Number(p._sum.totalPrice ?? 0),
          totalQty: Number(p._sum.quantity ?? 0),
        };
      }),
    };
  }

  async getStockValue(shopId: number) {
    const products = await this.prisma.product.findMany({
      where: { shopId, isActive: true, deletedAt: null },
      select: { name: true, stockQty: true, buyPrice: true, sellPrice: true, unit: true, stockAlert: true },
    });

    const totalBuyValue = products.reduce(
      (s, p) => s + Number(p.stockQty) * Number(p.buyPrice),
      0,
    );
    const totalSellValue = products.reduce(
      (s, p) => s + Number(p.stockQty) * Number(p.sellPrice),
      0,
    );
    const lowStockCount = products.filter(
      (p) => Number(p.stockQty) <= Number(p.stockAlert),
    ).length;

    return {
      totalValue: totalSellValue,
      totalBuyValue,
      potentialProfit: totalSellValue - totalBuyValue,
      totalProducts: products.length,
      lowStockCount,
    };
  }
}

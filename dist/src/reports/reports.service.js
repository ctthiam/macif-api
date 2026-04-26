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
exports.ReportsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let ReportsService = class ReportsService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getDashboard(shopId) {
        const todayStart = new Date();
        todayStart.setHours(0, 0, 0, 0);
        const monthStart = new Date();
        monthStart.setDate(1);
        monthStart.setHours(0, 0, 0, 0);
        const prevMonthStart = new Date(monthStart);
        prevMonthStart.setMonth(prevMonthStart.getMonth() - 1);
        const [todaySales, monthSales, prevMonthSales, openCredits, cashRegister, lowStockProducts, recentSales,] = await Promise.all([
            this.prisma.sale.findMany({
                where: { shopId, createdAt: { gte: todayStart } },
                select: { netAmount: true, paymentMethod: true },
            }),
            this.prisma.sale.aggregate({
                where: { shopId, createdAt: { gte: monthStart } },
                _sum: { netAmount: true },
            }),
            this.prisma.sale.aggregate({
                where: { shopId, createdAt: { gte: prevMonthStart, lt: monthStart } },
                _sum: { netAmount: true },
            }),
            this.prisma.credit.aggregate({
                where: { shopId, status: { in: ['open', 'partial', 'overdue'] } },
                _sum: { amountRemaining: true },
                _count: true,
            }),
            this.prisma.cashRegister.findFirst({
                where: { shopId, date: { gte: todayStart } },
                orderBy: { createdAt: 'desc' },
            }),
            this.prisma.product.findMany({
                where: { shopId, isActive: true, deletedAt: null },
                select: { id: true, name: true, stockQty: true, stockAlert: true, unit: true },
            }),
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
        const lowStock = lowStockProducts.filter((p) => Number(p.stockQty) <= Number(p.stockAlert));
        return {
            todayRevenue,
            todaySalesCount: todaySales.length,
            todayByMethod: todaySales.reduce((acc, s) => {
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
    async getDaily(shopId, date) {
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
    async getMonthly(shopId, year, month) {
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
        const byMethod = {};
        salesByMethod.forEach((g) => {
            byMethod[g.paymentMethod] = Number(g._sum.netAmount ?? 0);
        });
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
    async getStockValue(shopId) {
        const products = await this.prisma.product.findMany({
            where: { shopId, isActive: true, deletedAt: null },
            select: { name: true, stockQty: true, buyPrice: true, sellPrice: true, unit: true, stockAlert: true },
        });
        const totalBuyValue = products.reduce((s, p) => s + Number(p.stockQty) * Number(p.buyPrice), 0);
        const totalSellValue = products.reduce((s, p) => s + Number(p.stockQty) * Number(p.sellPrice), 0);
        const lowStockCount = products.filter((p) => Number(p.stockQty) <= Number(p.stockAlert)).length;
        return {
            totalValue: totalSellValue,
            totalBuyValue,
            potentialProfit: totalSellValue - totalBuyValue,
            totalProducts: products.length,
            lowStockCount,
        };
    }
};
exports.ReportsService = ReportsService;
exports.ReportsService = ReportsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ReportsService);
//# sourceMappingURL=reports.service.js.map
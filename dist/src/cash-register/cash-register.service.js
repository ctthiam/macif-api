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
exports.CashRegisterService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let CashRegisterService = class CashRegisterService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    todayDate() {
        const d = new Date();
        return new Date(d.getFullYear(), d.getMonth(), d.getDate());
    }
    async getToday(shopId) {
        const date = this.todayDate();
        const register = await this.prisma.cashRegister.findUnique({
            where: { shopId_date: { shopId, date } },
            include: { user: { select: { id: true, name: true } } },
        });
        if (!register) {
            return null;
        }
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
        const theoretical = Number(register.openingAmount) + cashIn - totalExpenses;
        return { ...register, cashIn, totalExpenses, theoretical };
    }
    async open(shopId, userId, dto) {
        const date = this.todayDate();
        const existing = await this.prisma.cashRegister.findUnique({
            where: { shopId_date: { shopId, date } },
        });
        if (existing) {
            throw new common_1.ConflictException('La caisse est déjà ouverte aujourd\'hui');
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
    async close(shopId, dto) {
        const date = this.todayDate();
        const register = await this.prisma.cashRegister.findUnique({
            where: { shopId_date: { shopId, date } },
        });
        if (!register)
            throw new common_1.BadRequestException('Aucune caisse ouverte aujourd\'hui');
        if (register.status === 'closed')
            throw new common_1.BadRequestException('La caisse est déjà fermée');
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
        const theoretical = Number(register.openingAmount) +
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
    async getHistory(shopId, limit = 30) {
        return this.prisma.cashRegister.findMany({
            where: { shopId },
            orderBy: { date: 'desc' },
            take: limit,
            include: { user: { select: { name: true } } },
        });
    }
};
exports.CashRegisterService = CashRegisterService;
exports.CashRegisterService = CashRegisterService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], CashRegisterService);
//# sourceMappingURL=cash-register.service.js.map
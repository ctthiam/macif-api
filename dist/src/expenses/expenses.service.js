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
exports.ExpensesService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let ExpensesService = class ExpensesService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(shopId, userId, dto) {
        const date = dto.date ? new Date(dto.date) : new Date();
        const dateOnly = new Date(date.getFullYear(), date.getMonth(), date.getDate());
        return this.prisma.expense.create({
            data: {
                shopId,
                userId,
                category: dto.category,
                amount: dto.amount,
                description: dto.description,
                date: dateOnly,
                isRecurring: dto.isRecurring ?? false,
                recurDay: dto.recurDay,
            },
        });
    }
    async findAll(shopId, opts) {
        const page = opts.page ?? 1;
        const limit = opts.limit ?? 30;
        const skip = (page - 1) * limit;
        const where = { shopId };
        if (opts.startDate || opts.endDate) {
            where.date = {};
            if (opts.startDate)
                where.date.gte = new Date(opts.startDate);
            if (opts.endDate) {
                const end = new Date(opts.endDate);
                end.setDate(end.getDate() + 1);
                where.date.lt = end;
            }
        }
        if (opts.category)
            where.category = opts.category;
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
    async remove(shopId, id) {
        const expense = await this.prisma.expense.findFirst({ where: { id, shopId } });
        if (!expense)
            throw new common_1.NotFoundException('Dépense introuvable');
        return this.prisma.expense.delete({ where: { id } });
    }
};
exports.ExpensesService = ExpensesService;
exports.ExpensesService = ExpensesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ExpensesService);
//# sourceMappingURL=expenses.service.js.map
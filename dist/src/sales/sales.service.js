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
exports.SalesService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let SalesService = class SalesService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(shopId, userId, dto) {
        if (!dto.items?.length)
            throw new common_1.BadRequestException('Au moins un article requis');
        const productIds = dto.items.map((i) => i.productId);
        const products = await this.prisma.product.findMany({
            where: { id: { in: productIds }, shopId, isActive: true, deletedAt: null },
        });
        if (products.length !== productIds.length) {
            throw new common_1.BadRequestException('Un ou plusieurs produits sont introuvables');
        }
        const productMap = new Map(products.map((p) => [p.id, p]));
        for (const item of dto.items) {
            const product = productMap.get(item.productId);
            if (Number(product.stockQty) < item.quantity) {
                throw new common_1.BadRequestException(`Stock insuffisant pour "${product.name}" (disponible: ${product.stockQty})`);
            }
        }
        const totalAmount = dto.items.reduce((sum, i) => sum + i.unitPrice * i.quantity, 0);
        const discount = dto.discount ?? 0;
        const netAmount = totalAmount - discount;
        const creditAmount = dto.paymentMethod === 'credit' ? netAmount : Math.max(0, netAmount - dto.paidAmount);
        const reference = await this.generateReference(shopId);
        const sale = await this.prisma.$transaction(async (tx) => {
            const newSale = await tx.sale.create({
                data: {
                    shopId,
                    userId,
                    customerId: dto.customerId ?? null,
                    reference,
                    totalAmount,
                    discount,
                    netAmount,
                    paymentMethod: dto.paymentMethod,
                    paidAmount: dto.paidAmount,
                    creditAmount,
                    notes: dto.notes,
                    items: {
                        create: dto.items.map((item) => ({
                            productId: item.productId,
                            quantity: item.quantity,
                            unitPrice: item.unitPrice,
                            totalPrice: item.unitPrice * item.quantity,
                        })),
                    },
                },
                include: { items: { include: { product: { select: { name: true, unit: true } } } } },
            });
            for (const item of dto.items) {
                const product = productMap.get(item.productId);
                await tx.product.update({
                    where: { id: item.productId },
                    data: { stockQty: Number(product.stockQty) - item.quantity },
                });
                await tx.stockMovement.create({
                    data: {
                        shopId,
                        productId: item.productId,
                        type: 'sale',
                        quantity: -item.quantity,
                        unitPrice: item.unitPrice,
                        referenceType: 'sale',
                        referenceId: newSale.id,
                        userId,
                    },
                });
            }
            if (creditAmount > 0 && dto.customerId) {
                const credit = await tx.credit.create({
                    data: {
                        shopId,
                        customerId: dto.customerId,
                        saleId: newSale.id,
                        amountTotal: creditAmount,
                        amountPaid: 0,
                        amountRemaining: creditAmount,
                        dueDate: dto.dueDate ? new Date(dto.dueDate) : null,
                        status: 'open',
                    },
                });
                await tx.customer.update({
                    where: { id: dto.customerId },
                    data: {
                        creditBalance: { increment: creditAmount },
                        totalBought: { increment: netAmount },
                    },
                });
            }
            else if (dto.customerId) {
                await tx.customer.update({
                    where: { id: dto.customerId },
                    data: { totalBought: { increment: netAmount } },
                });
            }
            return newSale;
        });
        return sale;
    }
    async findAll(shopId, filters) {
        const where = { shopId };
        if (filters.startDate || filters.endDate) {
            where.createdAt = {};
            if (filters.startDate)
                where.createdAt.gte = new Date(filters.startDate);
            if (filters.endDate) {
                const end = new Date(filters.endDate);
                end.setHours(23, 59, 59, 999);
                where.createdAt.lte = end;
            }
        }
        if (filters.paymentMethod)
            where.paymentMethod = filters.paymentMethod;
        if (filters.userId)
            where.userId = filters.userId;
        const limit = filters.limit ?? 20;
        const page = filters.page ?? 1;
        const skip = (page - 1) * limit;
        const [items, total] = await Promise.all([
            this.prisma.sale.findMany({
                where,
                include: {
                    items: { include: { product: { select: { name: true, unit: true } } } },
                    customer: { select: { name: true, phone: true } },
                    user: { select: { name: true } },
                },
                orderBy: { createdAt: 'desc' },
                take: limit,
                skip,
            }),
            this.prisma.sale.count({ where }),
        ]);
        return { items, total, page, limit, pages: Math.ceil(total / limit) };
    }
    async findOne(shopId, id) {
        const sale = await this.prisma.sale.findFirst({
            where: { id, shopId },
            include: {
                items: { include: { product: { select: { name: true, unit: true, photoUrl: true } } } },
                customer: { select: { id: true, name: true, phone: true } },
                user: { select: { name: true } },
                credits: true,
            },
        });
        if (!sale)
            throw new common_1.NotFoundException('Vente introuvable');
        return sale;
    }
    async getSummary(shopId, period) {
        const now = new Date();
        const start = new Date();
        if (period === 'today') {
            start.setHours(0, 0, 0, 0);
        }
        else if (period === 'week') {
            start.setDate(now.getDate() - 7);
        }
        else {
            start.setDate(1);
            start.setHours(0, 0, 0, 0);
        }
        const sales = await this.prisma.sale.findMany({
            where: { shopId, createdAt: { gte: start } },
            select: { netAmount: true, paymentMethod: true },
        });
        const total = sales.reduce((s, v) => s + Number(v.netAmount), 0);
        const byMethod = {};
        sales.forEach((s) => {
            byMethod[s.paymentMethod] = (byMethod[s.paymentMethod] ?? 0) + Number(s.netAmount);
        });
        return { total, count: sales.length, byMethod, period };
    }
    async generateReference(shopId) {
        const count = await this.prisma.sale.count({ where: { shopId } });
        const year = new Date().getFullYear();
        const num = String(count + 1).padStart(5, '0');
        return `VTE-${year}-${num}`;
    }
};
exports.SalesService = SalesService;
exports.SalesService = SalesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], SalesService);
//# sourceMappingURL=sales.service.js.map
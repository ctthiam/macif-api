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
exports.PurchasesService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let PurchasesService = class PurchasesService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findAll(shopId, opts) {
        const page = opts.page ?? 1;
        const limit = opts.limit ?? 20;
        const skip = (page - 1) * limit;
        const where = { shopId };
        if (opts.supplierId)
            where.supplierId = opts.supplierId;
        const [items, total] = await Promise.all([
            this.prisma.purchase.findMany({
                where,
                orderBy: { createdAt: 'desc' },
                skip,
                take: limit,
                include: {
                    supplier: { select: { id: true, name: true } },
                    user: { select: { name: true } },
                    items: {
                        include: { product: { select: { name: true, unit: true } } },
                    },
                },
            }),
            this.prisma.purchase.count({ where }),
        ]);
        return { items, total, page, pages: Math.ceil(total / limit) };
    }
    async findOne(shopId, id) {
        const p = await this.prisma.purchase.findFirst({
            where: { id, shopId },
            include: {
                supplier: { select: { id: true, name: true, phone: true } },
                user: { select: { name: true } },
                items: { include: { product: { select: { name: true, unit: true } } } },
            },
        });
        if (!p)
            throw new common_1.NotFoundException('Achat introuvable');
        return p;
    }
    async create(shopId, userId, dto) {
        if (!dto.items?.length)
            throw new common_1.BadRequestException('Au moins un article requis');
        const productIds = dto.items.map((i) => i.productId);
        const products = await this.prisma.product.findMany({
            where: { id: { in: productIds }, shopId, deletedAt: null },
        });
        if (products.length !== productIds.length) {
            throw new common_1.NotFoundException('Un ou plusieurs produits introuvables');
        }
        const totalAmount = dto.items.reduce((s, i) => s + i.quantity * i.unitPrice, 0);
        const reference = await this.generateReference(shopId);
        const deliveryDate = dto.deliveryDate ? new Date(dto.deliveryDate) : null;
        return this.prisma.$transaction(async (tx) => {
            const purchase = await tx.purchase.create({
                data: {
                    shopId,
                    userId,
                    supplierId: dto.supplierId ?? null,
                    reference,
                    totalAmount,
                    paidAmount: dto.paidAmount,
                    paymentMethod: dto.paymentMethod,
                    deliveryDate,
                    notes: dto.notes,
                    items: {
                        create: dto.items.map((item) => ({
                            productId: item.productId,
                            quantity: item.quantity,
                            unitPrice: item.unitPrice,
                            totalPrice: item.quantity * item.unitPrice,
                        })),
                    },
                },
                include: {
                    items: { include: { product: { select: { name: true, unit: true } } } },
                    supplier: { select: { name: true } },
                },
            });
            for (const item of dto.items) {
                await tx.product.update({
                    where: { id: item.productId },
                    data: { stockQty: { increment: item.quantity } },
                });
                await tx.stockMovement.create({
                    data: {
                        shopId,
                        productId: item.productId,
                        userId,
                        type: 'purchase',
                        quantity: item.quantity,
                        unitPrice: item.unitPrice,
                        referenceType: 'purchase',
                        referenceId: purchase.id,
                        note: dto.supplierId ? undefined : 'Achat direct',
                    },
                });
            }
            const debt = totalAmount - dto.paidAmount;
            if (dto.supplierId && debt > 0) {
                await tx.supplier.update({
                    where: { id: dto.supplierId },
                    data: { debtBalance: { increment: debt } },
                });
            }
            return purchase;
        });
    }
    async generateReference(shopId) {
        const year = new Date().getFullYear();
        const count = await this.prisma.purchase.count({
            where: { shopId, createdAt: { gte: new Date(`${year}-01-01`) } },
        });
        return `ACH-${year}-${String(count + 1).padStart(5, '0')}`;
    }
};
exports.PurchasesService = PurchasesService;
exports.PurchasesService = PurchasesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], PurchasesService);
//# sourceMappingURL=purchases.service.js.map
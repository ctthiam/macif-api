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
exports.ProductsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let ProductsService = class ProductsService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findAll(shopId, filters) {
        const where = { shopId, deletedAt: null };
        if (filters.categoryId)
            where.categoryId = filters.categoryId;
        if (filters.search)
            where.name = { contains: filters.search, mode: 'insensitive' };
        const products = await this.prisma.product.findMany({
            where,
            include: { category: true },
            orderBy: { name: 'asc' },
            take: filters.lowStock ? undefined : filters.limit,
        });
        if (filters.lowStock) {
            return products.filter((p) => Number(p.stockQty) <= Number(p.stockAlert));
        }
        return products;
    }
    async findLowStock(shopId) {
        const products = await this.prisma.product.findMany({
            where: { shopId, isActive: true, deletedAt: null },
            include: { category: true },
        });
        return products.filter((p) => Number(p.stockQty) <= Number(p.stockAlert));
    }
    async findOne(shopId, id) {
        const product = await this.prisma.product.findFirst({
            where: { id, shopId, deletedAt: null },
            include: {
                category: true,
                stockMovements: {
                    orderBy: { createdAt: 'desc' },
                    take: 20,
                    include: { user: { select: { name: true } } },
                },
            },
        });
        if (!product)
            throw new common_1.NotFoundException('Produit introuvable');
        return product;
    }
    async create(shopId, userId, dto) {
        const product = await this.prisma.product.create({
            data: {
                shopId,
                name: dto.name,
                categoryId: dto.categoryId,
                reference: dto.reference,
                unit: dto.unit ?? 'pièce',
                buyPrice: dto.buyPrice ?? 0,
                sellPrice: dto.sellPrice,
                sellPriceGros: dto.sellPriceGros,
                stockQty: dto.stockQty ?? 0,
                stockAlert: dto.stockAlert ?? 5,
            },
            include: { category: true },
        });
        if (dto.stockQty && dto.stockQty > 0) {
            await this.prisma.stockMovement.create({
                data: {
                    shopId,
                    productId: product.id,
                    type: 'adjustment',
                    quantity: dto.stockQty,
                    unitPrice: dto.buyPrice,
                    referenceType: 'initial',
                    userId,
                    note: 'Stock initial',
                },
            });
        }
        return product;
    }
    async update(shopId, id, dto) {
        await this.assertExists(shopId, id);
        return this.prisma.product.update({
            where: { id },
            data: {
                name: dto.name,
                categoryId: dto.categoryId,
                reference: dto.reference,
                unit: dto.unit,
                buyPrice: dto.buyPrice,
                sellPrice: dto.sellPrice,
                sellPriceGros: dto.sellPriceGros,
                stockAlert: dto.stockAlert,
            },
            include: { category: true },
        });
    }
    async softDelete(shopId, id) {
        await this.assertExists(shopId, id);
        await this.prisma.product.update({
            where: { id },
            data: { deletedAt: new Date(), isActive: false },
        });
    }
    async adjustStock(shopId, id, userId, dto) {
        const product = await this.assertExists(shopId, id);
        const newQty = Number(product.stockQty) + dto.quantity;
        const [updated] = await this.prisma.$transaction([
            this.prisma.product.update({
                where: { id },
                data: { stockQty: newQty },
            }),
            this.prisma.stockMovement.create({
                data: {
                    shopId,
                    productId: id,
                    type: 'adjustment',
                    quantity: dto.quantity,
                    referenceType: 'manual',
                    userId,
                    note: dto.note,
                },
            }),
        ]);
        return updated;
    }
    async assertExists(shopId, id) {
        const product = await this.prisma.product.findFirst({
            where: { id, shopId, deletedAt: null },
        });
        if (!product)
            throw new common_1.NotFoundException('Produit introuvable');
        return product;
    }
};
exports.ProductsService = ProductsService;
exports.ProductsService = ProductsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ProductsService);
//# sourceMappingURL=products.service.js.map
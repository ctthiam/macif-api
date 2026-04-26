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
exports.SuppliersService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let SuppliersService = class SuppliersService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    findAll(shopId, search) {
        return this.prisma.supplier.findMany({
            where: {
                shopId,
                deletedAt: null,
                ...(search ? { name: { contains: search, mode: 'insensitive' } } : {}),
            },
            include: {
                _count: { select: { purchases: true } },
            },
            orderBy: { name: 'asc' },
        });
    }
    async findOne(shopId, id) {
        const supplier = await this.prisma.supplier.findFirst({
            where: { id, shopId, deletedAt: null },
            include: {
                purchases: {
                    orderBy: { createdAt: 'desc' },
                    take: 10,
                    include: {
                        items: { include: { product: { select: { name: true, unit: true } } } },
                        user: { select: { name: true } },
                    },
                },
            },
        });
        if (!supplier)
            throw new common_1.NotFoundException('Fournisseur introuvable');
        return supplier;
    }
    create(shopId, dto) {
        return this.prisma.supplier.create({
            data: { shopId, name: dto.name, phone: dto.phone, address: dto.address },
        });
    }
    async update(shopId, id, dto) {
        await this.assertExists(shopId, id);
        return this.prisma.supplier.update({
            where: { id },
            data: { name: dto.name, phone: dto.phone, address: dto.address },
        });
    }
    async softDelete(shopId, id) {
        await this.assertExists(shopId, id);
        return this.prisma.supplier.update({
            where: { id },
            data: { deletedAt: new Date() },
        });
    }
    async assertExists(shopId, id) {
        const s = await this.prisma.supplier.findFirst({ where: { id, shopId, deletedAt: null } });
        if (!s)
            throw new common_1.NotFoundException('Fournisseur introuvable');
        return s;
    }
};
exports.SuppliersService = SuppliersService;
exports.SuppliersService = SuppliersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], SuppliersService);
//# sourceMappingURL=suppliers.service.js.map
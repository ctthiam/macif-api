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
exports.ShopsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let ShopsService = class ShopsService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getMyShop(shopId) {
        const shop = await this.prisma.shop.findUnique({
            where: { id: shopId },
            include: {
                _count: { select: { products: true, customers: true } },
            },
        });
        if (!shop)
            throw new common_1.NotFoundException('Boutique introuvable');
        return shop;
    }
    async updateShop(shopId, userId, dto) {
        await this.assertOwner(shopId, userId);
        return this.prisma.shop.update({
            where: { id: shopId },
            data: dto,
        });
    }
    async uploadLogo(shopId, userId, logoUrl) {
        await this.assertOwner(shopId, userId);
        return this.prisma.shop.update({
            where: { id: shopId },
            data: { logoUrl },
        });
    }
    async getTeam(shopId) {
        return this.prisma.shopUser.findMany({
            where: { shopId },
            include: {
                user: {
                    select: { id: true, name: true, phone: true, isActive: true, lastLoginAt: true },
                },
            },
        });
    }
    async deactivateTeamMember(shopId, ownerId, memberId) {
        await this.assertOwner(shopId, ownerId);
        if (memberId === ownerId)
            throw new common_1.ForbiddenException('Vous ne pouvez pas vous désactiver');
        const shopUser = await this.prisma.shopUser.findFirst({
            where: { shopId, userId: memberId },
        });
        if (!shopUser)
            throw new common_1.NotFoundException('Membre introuvable');
        return this.prisma.user.update({
            where: { id: memberId },
            data: { isActive: false },
        });
    }
    async assertOwner(shopId, userId) {
        const su = await this.prisma.shopUser.findFirst({
            where: { shopId, userId, role: 'owner' },
        });
        if (!su)
            throw new common_1.ForbiddenException('Accès réservé au gérant');
    }
};
exports.ShopsService = ShopsService;
exports.ShopsService = ShopsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ShopsService);
//# sourceMappingURL=shops.service.js.map
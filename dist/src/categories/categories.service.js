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
exports.CategoriesService = exports.CategoryDto = void 0;
const common_1 = require("@nestjs/common");
const class_validator_1 = require("class-validator");
const prisma_service_1 = require("../prisma/prisma.service");
class CategoryDto {
    name;
    icon;
    color;
}
exports.CategoryDto = CategoryDto;
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CategoryDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CategoryDto.prototype, "icon", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CategoryDto.prototype, "color", void 0);
let CategoriesService = class CategoriesService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    findAll(shopId) {
        return this.prisma.category.findMany({
            where: { shopId },
            include: { _count: { select: { products: true } } },
            orderBy: { name: 'asc' },
        });
    }
    create(shopId, dto) {
        return this.prisma.category.create({
            data: { shopId, name: dto.name, icon: dto.icon, color: dto.color },
        });
    }
    async update(shopId, id, dto) {
        await this.assertExists(shopId, id);
        return this.prisma.category.update({
            where: { id },
            data: { name: dto.name, icon: dto.icon, color: dto.color },
        });
    }
    async remove(shopId, id) {
        await this.assertExists(shopId, id);
        await this.prisma.category.delete({ where: { id } });
    }
    async assertExists(shopId, id) {
        const cat = await this.prisma.category.findFirst({ where: { id, shopId } });
        if (!cat)
            throw new common_1.NotFoundException('Catégorie introuvable');
        return cat;
    }
};
exports.CategoriesService = CategoriesService;
exports.CategoriesService = CategoriesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], CategoriesService);
//# sourceMappingURL=categories.service.js.map
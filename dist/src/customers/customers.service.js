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
exports.CustomersService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let CustomersService = class CustomersService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    findAll(shopId, search) {
        return this.prisma.customer.findMany({
            where: {
                shopId,
                deletedAt: null,
                ...(search
                    ? {
                        OR: [
                            { name: { contains: search, mode: 'insensitive' } },
                            { phone: { contains: search } },
                        ],
                    }
                    : {}),
            },
            orderBy: [{ creditBalance: 'desc' }, { name: 'asc' }],
        });
    }
    async findOne(shopId, id) {
        const customer = await this.prisma.customer.findFirst({
            where: { id, shopId, deletedAt: null },
            include: {
                credits: {
                    where: { status: { in: ['open', 'partial', 'overdue'] } },
                    orderBy: { createdAt: 'desc' },
                },
                sales: {
                    orderBy: { createdAt: 'desc' },
                    take: 10,
                    include: { items: { include: { product: { select: { name: true } } } } },
                },
            },
        });
        if (!customer)
            throw new common_1.NotFoundException('Client introuvable');
        return customer;
    }
    create(shopId, dto) {
        return this.prisma.customer.create({
            data: {
                shopId,
                name: dto.name,
                phone: dto.phone,
                type: dto.type ?? 'individual',
                address: dto.address,
            },
        });
    }
    async update(shopId, id, dto) {
        await this.assertExists(shopId, id);
        return this.prisma.customer.update({
            where: { id },
            data: { name: dto.name, phone: dto.phone, type: dto.type, address: dto.address },
        });
    }
    async softDelete(shopId, id) {
        await this.assertExists(shopId, id);
        await this.prisma.customer.update({ where: { id }, data: { deletedAt: new Date() } });
    }
    async assertExists(shopId, id) {
        const c = await this.prisma.customer.findFirst({ where: { id, shopId, deletedAt: null } });
        if (!c)
            throw new common_1.NotFoundException('Client introuvable');
        return c;
    }
};
exports.CustomersService = CustomersService;
exports.CustomersService = CustomersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], CustomersService);
//# sourceMappingURL=customers.service.js.map
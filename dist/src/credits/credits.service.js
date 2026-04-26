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
exports.CreditsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let CreditsService = class CreditsService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    findAll(shopId, customerId) {
        return this.prisma.credit.findMany({
            where: {
                shopId,
                ...(customerId ? { customerId } : {}),
                status: { in: ['open', 'partial', 'overdue'] },
            },
            include: {
                customer: { select: { id: true, name: true, phone: true } },
                payments: { orderBy: { createdAt: 'desc' }, take: 5 },
            },
            orderBy: { createdAt: 'desc' },
        });
    }
    async pay(shopId, userId, creditId, dto) {
        const credit = await this.prisma.credit.findFirst({
            where: { id: creditId, shopId },
        });
        if (!credit)
            throw new common_1.NotFoundException('Crédit introuvable');
        if (credit.status === 'paid')
            throw new common_1.BadRequestException('Ce crédit est déjà soldé');
        const remaining = Number(credit.amountRemaining);
        if (dto.amount > remaining) {
            throw new common_1.BadRequestException(`Montant trop élevé. Restant: ${remaining} FCFA`);
        }
        const newPaid = Number(credit.amountPaid) + dto.amount;
        const newRemaining = remaining - dto.amount;
        const newStatus = newRemaining <= 0 ? 'paid' : 'partial';
        return this.prisma.$transaction(async (tx) => {
            const updated = await tx.credit.update({
                where: { id: creditId },
                data: {
                    amountPaid: newPaid,
                    amountRemaining: newRemaining,
                    status: newStatus,
                    payments: {
                        create: {
                            amount: dto.amount,
                            paymentMethod: (dto.paymentMethod ?? 'cash'),
                            userId,
                            note: dto.note,
                        },
                    },
                },
            });
            await tx.customer.update({
                where: { id: credit.customerId },
                data: { creditBalance: { decrement: dto.amount } },
            });
            return updated;
        });
    }
};
exports.CreditsService = CreditsService;
exports.CreditsService = CreditsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], CreditsService);
//# sourceMappingURL=credits.service.js.map
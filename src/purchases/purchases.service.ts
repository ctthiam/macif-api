import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreatePurchaseDto } from './dto/purchase.dto';

@Injectable()
export class PurchasesService {
  constructor(private prisma: PrismaService) {}

  async findAll(shopId: number, opts: { supplierId?: number; page?: number; limit?: number }) {
    const page = opts.page ?? 1;
    const limit = opts.limit ?? 20;
    const skip = (page - 1) * limit;

    const where: any = { shopId };
    if (opts.supplierId) where.supplierId = opts.supplierId;

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

  async findOne(shopId: number, id: number) {
    const p = await this.prisma.purchase.findFirst({
      where: { id, shopId },
      include: {
        supplier: { select: { id: true, name: true, phone: true } },
        user: { select: { name: true } },
        items: { include: { product: { select: { name: true, unit: true } } } },
      },
    });
    if (!p) throw new NotFoundException('Achat introuvable');
    return p;
  }

  async create(shopId: number, userId: number, dto: CreatePurchaseDto) {
    if (!dto.items?.length) throw new BadRequestException('Au moins un article requis');

    // Vérifier que tous les produits existent
    const productIds = dto.items.map((i) => i.productId);
    const products = await this.prisma.product.findMany({
      where: { id: { in: productIds }, shopId, deletedAt: null },
    });
    if (products.length !== productIds.length) {
      throw new NotFoundException('Un ou plusieurs produits introuvables');
    }

    const totalAmount = dto.items.reduce((s, i) => s + i.quantity * i.unitPrice, 0);
    const reference = await this.generateReference(shopId);
    const deliveryDate = dto.deliveryDate ? new Date(dto.deliveryDate) : null;

    return this.prisma.$transaction(async (tx) => {
      // Créer l'achat
      const purchase = await tx.purchase.create({
        data: {
          shopId,
          userId,
          supplierId: dto.supplierId ?? null,
          reference,
          totalAmount,
          paidAmount: dto.paidAmount,
          paymentMethod: dto.paymentMethod as any,
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

      // Mettre à jour le stock et créer les mouvements
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

      // Mettre à jour la dette fournisseur si crédit
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

  private async generateReference(shopId: number): Promise<string> {
    const year = new Date().getFullYear();
    const count = await this.prisma.purchase.count({
      where: { shopId, createdAt: { gte: new Date(`${year}-01-01`) } },
    });
    return `ACH-${year}-${String(count + 1).padStart(5, '0')}`;
  }
}

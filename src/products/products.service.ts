import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateProductDto, UpdateProductDto, AdjustStockDto } from './dto/product.dto';

@Injectable()
export class ProductsService {
  constructor(private prisma: PrismaService) {}

  async findAll(shopId: number, filters: { categoryId?: number; lowStock?: boolean; search?: string; limit?: number }) {
    const where: any = { shopId, deletedAt: null };

    if (filters.categoryId) where.categoryId = filters.categoryId;
    if (filters.search) where.name = { contains: filters.search, mode: 'insensitive' };

    const products = await this.prisma.product.findMany({
      where,
      include: { category: true },
      orderBy: { name: 'asc' },
      // limit uniquement quand pas de filtre lowStock (qui nécessite un filtre JS post-fetch)
      take: filters.lowStock ? undefined : filters.limit,
    });

    if (filters.lowStock) {
      return products.filter((p) => Number(p.stockQty) <= Number(p.stockAlert));
    }

    return products;
  }

  async findLowStock(shopId: number) {
    const products = await this.prisma.product.findMany({
      where: { shopId, isActive: true, deletedAt: null },
      include: { category: true },
    });
    return products.filter((p) => Number(p.stockQty) <= Number(p.stockAlert));
  }

  async findOne(shopId: number, id: number) {
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
    if (!product) throw new NotFoundException('Produit introuvable');
    return product;
  }

  async create(shopId: number, userId: number, dto: CreateProductDto) {
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

  async update(shopId: number, id: number, dto: UpdateProductDto) {
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

  async softDelete(shopId: number, id: number) {
    await this.assertExists(shopId, id);
    await this.prisma.product.update({
      where: { id },
      data: { deletedAt: new Date(), isActive: false },
    });
  }

  async adjustStock(shopId: number, id: number, userId: number, dto: AdjustStockDto) {
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

  private async assertExists(shopId: number, id: number) {
    const product = await this.prisma.product.findFirst({
      where: { id, shopId, deletedAt: null },
    });
    if (!product) throw new NotFoundException('Produit introuvable');
    return product;
  }
}

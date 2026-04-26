import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateSupplierDto, UpdateSupplierDto } from './dto/supplier.dto';

@Injectable()
export class SuppliersService {
  constructor(private prisma: PrismaService) {}

  findAll(shopId: number, search?: string) {
    return this.prisma.supplier.findMany({
      where: {
        shopId,
        deletedAt: null,
        ...(search ? { name: { contains: search, mode: 'insensitive' as const } } : {}),
      },
      include: {
        _count: { select: { purchases: true } },
      },
      orderBy: { name: 'asc' },
    });
  }

  async findOne(shopId: number, id: number) {
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
    if (!supplier) throw new NotFoundException('Fournisseur introuvable');
    return supplier;
  }

  create(shopId: number, dto: CreateSupplierDto) {
    return this.prisma.supplier.create({
      data: { shopId, name: dto.name, phone: dto.phone, address: dto.address },
    });
  }

  async update(shopId: number, id: number, dto: UpdateSupplierDto) {
    await this.assertExists(shopId, id);
    return this.prisma.supplier.update({
      where: { id },
      data: { name: dto.name, phone: dto.phone, address: dto.address },
    });
  }

  async softDelete(shopId: number, id: number) {
    await this.assertExists(shopId, id);
    return this.prisma.supplier.update({
      where: { id },
      data: { deletedAt: new Date() },
    });
  }

  private async assertExists(shopId: number, id: number) {
    const s = await this.prisma.supplier.findFirst({ where: { id, shopId, deletedAt: null } });
    if (!s) throw new NotFoundException('Fournisseur introuvable');
    return s;
  }
}

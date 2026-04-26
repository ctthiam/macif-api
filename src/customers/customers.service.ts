import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateCustomerDto, UpdateCustomerDto } from './dto/customer.dto';

@Injectable()
export class CustomersService {
  constructor(private prisma: PrismaService) {}

  findAll(shopId: number, search?: string) {
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

  async findOne(shopId: number, id: number) {
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
    if (!customer) throw new NotFoundException('Client introuvable');
    return customer;
  }

  create(shopId: number, dto: CreateCustomerDto) {
    return this.prisma.customer.create({
      data: {
        shopId,
        name: dto.name,
        phone: dto.phone,
        type: (dto.type as any) ?? 'individual',
        address: dto.address,
      },
    });
  }

  async update(shopId: number, id: number, dto: UpdateCustomerDto) {
    await this.assertExists(shopId, id);
    return this.prisma.customer.update({
      where: { id },
      data: { name: dto.name, phone: dto.phone, type: dto.type as any, address: dto.address },
    });
  }

  async softDelete(shopId: number, id: number) {
    await this.assertExists(shopId, id);
    await this.prisma.customer.update({ where: { id }, data: { deletedAt: new Date() } });
  }

  private async assertExists(shopId: number, id: number) {
    const c = await this.prisma.customer.findFirst({ where: { id, shopId, deletedAt: null } });
    if (!c) throw new NotFoundException('Client introuvable');
    return c;
  }
}

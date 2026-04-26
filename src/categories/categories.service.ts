import { Injectable, NotFoundException } from '@nestjs/common';
import { IsString, IsOptional } from 'class-validator';
import { PrismaService } from '../prisma/prisma.service';

export class CategoryDto {
  @IsString() name: string;
  @IsOptional() @IsString() icon?: string;
  @IsOptional() @IsString() color?: string;
}

@Injectable()
export class CategoriesService {
  constructor(private prisma: PrismaService) {}

  findAll(shopId: number) {
    return this.prisma.category.findMany({
      where: { shopId },
      include: { _count: { select: { products: true } } },
      orderBy: { name: 'asc' },
    });
  }

  create(shopId: number, dto: CategoryDto) {
    return this.prisma.category.create({
      data: { shopId, name: dto.name, icon: dto.icon, color: dto.color },
    });
  }

  async update(shopId: number, id: number, dto: CategoryDto) {
    await this.assertExists(shopId, id);
    return this.prisma.category.update({
      where: { id },
      data: { name: dto.name, icon: dto.icon, color: dto.color },
    });
  }

  async remove(shopId: number, id: number) {
    await this.assertExists(shopId, id);
    await this.prisma.category.delete({ where: { id } });
  }

  private async assertExists(shopId: number, id: number) {
    const cat = await this.prisma.category.findFirst({ where: { id, shopId } });
    if (!cat) throw new NotFoundException('Catégorie introuvable');
    return cat;
  }
}

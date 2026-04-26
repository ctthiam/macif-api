import { Injectable, NotFoundException, ForbiddenException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { UpdateShopDto } from './dto/shop.dto';

@Injectable()
export class ShopsService {
  constructor(private prisma: PrismaService) {}

  async getMyShop(shopId: number) {
    const shop = await this.prisma.shop.findUnique({
      where: { id: shopId },
      include: {
        _count: { select: { products: true, customers: true } },
      },
    });
    if (!shop) throw new NotFoundException('Boutique introuvable');
    return shop;
  }

  async updateShop(shopId: number, userId: number, dto: UpdateShopDto) {
    await this.assertOwner(shopId, userId);
    return this.prisma.shop.update({
      where: { id: shopId },
      data: dto,
    });
  }

  async uploadLogo(shopId: number, userId: number, logoUrl: string) {
    await this.assertOwner(shopId, userId);
    return this.prisma.shop.update({
      where: { id: shopId },
      data: { logoUrl },
    });
  }

  async getTeam(shopId: number) {
    return this.prisma.shopUser.findMany({
      where: { shopId },
      include: {
        user: {
          select: { id: true, name: true, phone: true, isActive: true, lastLoginAt: true },
        },
      },
    });
  }

  async deactivateTeamMember(shopId: number, ownerId: number, memberId: number) {
    await this.assertOwner(shopId, ownerId);
    if (memberId === ownerId) throw new ForbiddenException('Vous ne pouvez pas vous désactiver');

    const shopUser = await this.prisma.shopUser.findFirst({
      where: { shopId, userId: memberId },
    });
    if (!shopUser) throw new NotFoundException('Membre introuvable');

    return this.prisma.user.update({
      where: { id: memberId },
      data: { isActive: false },
    });
  }

  private async assertOwner(shopId: number, userId: number) {
    const su = await this.prisma.shopUser.findFirst({
      where: { shopId, userId, role: 'owner' },
    });
    if (!su) throw new ForbiddenException('Accès réservé au gérant');
  }
}

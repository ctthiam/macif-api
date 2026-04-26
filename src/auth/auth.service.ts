import {
  Injectable,
  ConflictException,
  UnauthorizedException,
  NotFoundException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import * as bcrypt from 'bcrypt';
import { PrismaService } from '../prisma/prisma.service';
import { RegisterDto, LoginDto, SetPinDto, VerifyPinDto } from './dto/auth.dto';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwt: JwtService,
    private config: ConfigService,
  ) {}

  async register(dto: RegisterDto, ip: string) {
    const exists = await this.prisma.user.findUnique({ where: { phone: dto.phone } });
    if (exists) throw new ConflictException('Ce numéro est déjà utilisé');

    const passwordHash = await bcrypt.hash(dto.password, 12);

    const result = await this.prisma.$transaction(async (tx) => {
      const user = await tx.user.create({
        data: {
          name: dto.name,
          phone: dto.phone,
          email: dto.email,
          passwordHash,
          lastLoginAt: new Date(),
          lastLoginIp: ip,
        },
      });

      const trialEndsAt = new Date();
      trialEndsAt.setDate(trialEndsAt.getDate() + 30);

      const shop = await tx.shop.create({
        data: {
          ownerId: user.id,
          name: dto.shopName,
          plan: 'trial',
          trialEndsAt,
        },
      });

      await tx.shopUser.create({
        data: { shopId: shop.id, userId: user.id, role: 'owner' },
      });

      // Créer les catégories par défaut
      const defaultCategories = [
        { name: 'Ciment', icon: '🧱', color: '#8D6E63' },
        { name: 'Fer', icon: '🔩', color: '#607D8B' },
        { name: 'Peinture', icon: '🎨', color: '#E91E63' },
        { name: 'Plomberie', icon: '🚰', color: '#2196F3' },
        { name: 'Électricité', icon: '⚡', color: '#FFC107' },
        { name: 'Quincaillerie', icon: '🔧', color: '#FF5722' },
        { name: 'Maçonnerie', icon: '🏗️', color: '#795548' },
        { name: 'Autre', icon: '📦', color: '#9E9E9E' },
      ];

      await tx.category.createMany({
        data: defaultCategories.map((cat) => ({ ...cat, shopId: shop.id })),
      });

      return { user, shop };
    });

    const tokens = await this.generateTokens(result.user.id, result.shop.id, 'owner');
    return { user: this.sanitizeUser(result.user), shop: result.shop, tokens };
  }

  async login(dto: LoginDto, ip: string) {
    const user = await this.prisma.user.findUnique({
      where: { phone: dto.phone },
      include: {
        shopUsers: {
          include: { shop: true },
          take: 1,
          orderBy: { createdAt: 'asc' },
        },
      },
    });

    if (!user || !user.isActive) throw new UnauthorizedException('Identifiants incorrects');

    const valid = await bcrypt.compare(dto.password, user.passwordHash);
    if (!valid) throw new UnauthorizedException('Identifiants incorrects');

    if (!user.shopUsers.length) throw new UnauthorizedException('Aucune boutique associée');

    const shopUser = user.shopUsers[0];
    await this.prisma.user.update({
      where: { id: user.id },
      data: { lastLoginAt: new Date(), lastLoginIp: ip },
    });

    const tokens = await this.generateTokens(user.id, shopUser.shopId, shopUser.role);
    return {
      user: this.sanitizeUser(user),
      shop: shopUser.shop,
      hasPin: !!user.pinHash,
      tokens,
    };
  }

  async setPin(userId: number, dto: SetPinDto) {
    const pinHash = await bcrypt.hash(dto.pin, 10);
    await this.prisma.user.update({ where: { id: userId }, data: { pinHash } });
    return { message: 'PIN configuré avec succès' };
  }

  async verifyPin(userId: number, dto: VerifyPinDto) {
    const user = await this.prisma.user.findUnique({ where: { id: userId } });
    if (!user?.pinHash) throw new NotFoundException('Aucun PIN configuré');

    const valid = await bcrypt.compare(dto.pin, user.pinHash);
    if (!valid) throw new UnauthorizedException('PIN incorrect');

    return { valid: true };
  }

  async refresh(refreshToken: string) {
    const stored = await this.prisma.refreshToken.findUnique({
      where: { token: refreshToken },
      include: {
        user: {
          include: {
            shopUsers: { take: 1, orderBy: { createdAt: 'asc' } },
          },
        },
      },
    });

    if (!stored || stored.expiresAt < new Date()) {
      throw new UnauthorizedException('Session expirée, veuillez vous reconnecter');
    }

    const shopUser = stored.user.shopUsers[0];
    const tokens = await this.generateTokens(stored.userId, shopUser.shopId, shopUser.role);

    await this.prisma.refreshToken.delete({ where: { id: stored.id } });
    return tokens;
  }

  async logout(userId: number) {
    await this.prisma.refreshToken.deleteMany({ where: { userId } });
  }

  async getMe(userId: number) {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
      include: {
        shopUsers: {
          include: { shop: true },
          take: 1,
          orderBy: { createdAt: 'asc' },
        },
      },
    });
    if (!user) throw new NotFoundException('Utilisateur introuvable');
    return {
      ...this.sanitizeUser(user),
      shop: user.shopUsers[0]?.shop ?? null,
      role: user.shopUsers[0]?.role ?? null,
      hasPin: !!user.pinHash,
    };
  }

  private async generateTokens(userId: number, shopId: number, role: string) {
    const payload = { sub: userId, shopId, role };

    const accessToken = this.jwt.sign(payload, {
      secret: this.config.get('JWT_ACCESS_SECRET'),
      expiresIn: this.config.get('JWT_ACCESS_EXPIRES'),
    });

    const refreshToken = this.jwt.sign(payload, {
      secret: this.config.get('JWT_REFRESH_SECRET'),
      expiresIn: this.config.get('JWT_REFRESH_EXPIRES'),
    });

    const expiresAt = new Date();
    expiresAt.setDate(expiresAt.getDate() + 30);

    await this.prisma.refreshToken.create({
      data: { userId, token: refreshToken, expiresAt },
    });

    return { accessToken, refreshToken };
  }

  async changePassword(userId: number, currentPassword: string, newPassword: string) {
    const user = await this.prisma.user.findUnique({ where: { id: userId } });
    if (!user) throw new UnauthorizedException('Utilisateur introuvable');

    const valid = await bcrypt.compare(currentPassword, user.passwordHash);
    if (!valid) throw new UnauthorizedException('Mot de passe actuel incorrect');

    const newHash = await bcrypt.hash(newPassword, 12);
    await this.prisma.user.update({ where: { id: userId }, data: { passwordHash: newHash } });

    // Invalider tous les refresh tokens
    await this.prisma.refreshToken.deleteMany({ where: { userId } });

    return { message: 'Mot de passe modifié avec succès' };
  }

  private sanitizeUser(user: any) {
    const { passwordHash, pinHash, ...safe } = user;
    return safe;
  }
}

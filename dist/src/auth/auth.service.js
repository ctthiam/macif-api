"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const config_1 = require("@nestjs/config");
const bcrypt = __importStar(require("bcrypt"));
const prisma_service_1 = require("../prisma/prisma.service");
let AuthService = class AuthService {
    constructor(prisma, jwt, config) {
        this.prisma = prisma;
        this.jwt = jwt;
        this.config = config;
    }
    async register(dto, ip) {
        const exists = await this.prisma.user.findUnique({ where: { phone: dto.phone } });
        if (exists)
            throw new common_1.ConflictException('Ce numéro est déjà utilisé');
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
    async login(dto, ip) {
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
        if (!user || !user.isActive)
            throw new common_1.UnauthorizedException('Identifiants incorrects');
        const valid = await bcrypt.compare(dto.password, user.passwordHash);
        if (!valid)
            throw new common_1.UnauthorizedException('Identifiants incorrects');
        if (!user.shopUsers.length)
            throw new common_1.UnauthorizedException('Aucune boutique associée');
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
    async setPin(userId, dto) {
        const pinHash = await bcrypt.hash(dto.pin, 10);
        await this.prisma.user.update({ where: { id: userId }, data: { pinHash } });
        return { message: 'PIN configuré avec succès' };
    }
    async verifyPin(userId, dto) {
        const user = await this.prisma.user.findUnique({ where: { id: userId } });
        if (!user?.pinHash)
            throw new common_1.NotFoundException('Aucun PIN configuré');
        const valid = await bcrypt.compare(dto.pin, user.pinHash);
        if (!valid)
            throw new common_1.UnauthorizedException('PIN incorrect');
        return { valid: true };
    }
    async refresh(refreshToken) {
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
            throw new common_1.UnauthorizedException('Session expirée, veuillez vous reconnecter');
        }
        const shopUser = stored.user.shopUsers[0];
        const tokens = await this.generateTokens(stored.userId, shopUser.shopId, shopUser.role);
        await this.prisma.refreshToken.delete({ where: { id: stored.id } });
        return tokens;
    }
    async logout(userId) {
        await this.prisma.refreshToken.deleteMany({ where: { userId } });
    }
    async getMe(userId) {
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
        if (!user)
            throw new common_1.NotFoundException('Utilisateur introuvable');
        return {
            ...this.sanitizeUser(user),
            shop: user.shopUsers[0]?.shop ?? null,
            role: user.shopUsers[0]?.role ?? null,
            hasPin: !!user.pinHash,
        };
    }
    async generateTokens(userId, shopId, role) {
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
    async changePassword(userId, currentPassword, newPassword) {
        const user = await this.prisma.user.findUnique({ where: { id: userId } });
        if (!user)
            throw new common_1.UnauthorizedException('Utilisateur introuvable');
        const valid = await bcrypt.compare(currentPassword, user.passwordHash);
        if (!valid)
            throw new common_1.UnauthorizedException('Mot de passe actuel incorrect');
        const newHash = await bcrypt.hash(newPassword, 12);
        await this.prisma.user.update({ where: { id: userId }, data: { passwordHash: newHash } });
        await this.prisma.refreshToken.deleteMany({ where: { userId } });
        return { message: 'Mot de passe modifié avec succès' };
    }
    sanitizeUser(user) {
        const { passwordHash, pinHash, ...safe } = user;
        return safe;
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        jwt_1.JwtService,
        config_1.ConfigService])
], AuthService);
//# sourceMappingURL=auth.service.js.map
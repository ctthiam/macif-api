import { PrismaService } from '../prisma/prisma.service';
import { UpdateShopDto } from './dto/shop.dto';
export declare class ShopsService {
    private prisma;
    constructor(prisma: PrismaService);
    getMyShop(shopId: number): Promise<{
        _count: {
            customers: number;
            products: number;
        };
    } & {
        id: number;
        name: string;
        phone: string | null;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
        ownerId: number;
        address: string | null;
        city: string | null;
        logoUrl: string | null;
        primaryColor: string;
        currency: string;
        plan: import("@prisma/client").$Enums.Plan;
        trialEndsAt: Date | null;
        planExpiresAt: Date | null;
    }>;
    updateShop(shopId: number, userId: number, dto: UpdateShopDto): Promise<{
        id: number;
        name: string;
        phone: string | null;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
        ownerId: number;
        address: string | null;
        city: string | null;
        logoUrl: string | null;
        primaryColor: string;
        currency: string;
        plan: import("@prisma/client").$Enums.Plan;
        trialEndsAt: Date | null;
        planExpiresAt: Date | null;
    }>;
    uploadLogo(shopId: number, userId: number, logoUrl: string): Promise<{
        id: number;
        name: string;
        phone: string | null;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
        ownerId: number;
        address: string | null;
        city: string | null;
        logoUrl: string | null;
        primaryColor: string;
        currency: string;
        plan: import("@prisma/client").$Enums.Plan;
        trialEndsAt: Date | null;
        planExpiresAt: Date | null;
    }>;
    getTeam(shopId: number): Promise<({
        user: {
            id: number;
            name: string;
            phone: string;
            isActive: boolean;
            lastLoginAt: Date | null;
        };
    } & {
        id: number;
        createdAt: Date;
        userId: number;
        shopId: number;
        role: import("@prisma/client").$Enums.UserRole;
    })[]>;
    deactivateTeamMember(shopId: number, ownerId: number, memberId: number): Promise<{
        id: number;
        name: string;
        phone: string;
        email: string | null;
        passwordHash: string;
        pinHash: string | null;
        isActive: boolean;
        lastLoginAt: Date | null;
        lastLoginIp: string | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
    private assertOwner;
}

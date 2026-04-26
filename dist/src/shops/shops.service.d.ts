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
        name: string;
        phone: string | null;
        id: number;
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
        name: string;
        phone: string | null;
        id: number;
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
        name: string;
        phone: string | null;
        id: number;
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
            name: string;
            phone: string;
            id: number;
            isActive: boolean;
            lastLoginAt: Date | null;
        };
    } & {
        id: number;
        createdAt: Date;
        shopId: number;
        userId: number;
        role: import("@prisma/client").$Enums.UserRole;
    })[]>;
    deactivateTeamMember(shopId: number, ownerId: number, memberId: number): Promise<{
        name: string;
        phone: string;
        email: string | null;
        id: number;
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

import { ShopsService } from './shops.service';
import { UpdateShopDto } from './dto/shop.dto';
export declare class ShopsController {
    private shops;
    constructor(shops: ShopsService);
    getMyShop(user: any): Promise<{
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
    updateShop(id: number, user: any, dto: UpdateShopDto): Promise<{
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
    getTeam(id: number): Promise<({
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
    deactivateMember(id: number, memberId: number, user: any): Promise<{
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
}

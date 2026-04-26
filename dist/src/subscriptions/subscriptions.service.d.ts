import { ConfigService } from '@nestjs/config';
import { PrismaService } from '../prisma/prisma.service';
export declare class SubscriptionsService {
    private prisma;
    private config;
    constructor(prisma: PrismaService, config: ConfigService);
    getStatus(shopId: number): Promise<{
        isActive: boolean;
        isInTrial: false;
        hasActiveSub: boolean;
        daysLeft: number;
        trialEndsAt: Date | null;
        lastSubscription: {
            id: number;
            createdAt: Date;
            expiresAt: Date;
            shopId: number;
            amount: import("@prisma/client/runtime/library").Decimal;
            paymentRef: string | null;
            startsAt: Date;
        };
        price: number;
    }>;
    initiatePayment(shopId: number, userId: number, returnUrl: string): Promise<{
        paymentUrl: any;
        token: any;
        ref: string;
    }>;
    handleWebhook(data: any): Promise<void>;
    getHistory(shopId: number): Promise<{
        id: number;
        createdAt: Date;
        expiresAt: Date;
        shopId: number;
        amount: import("@prisma/client/runtime/library").Decimal;
        paymentRef: string | null;
        startsAt: Date;
    }[]>;
}

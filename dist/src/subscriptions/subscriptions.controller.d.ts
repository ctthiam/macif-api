import { SubscriptionsService } from './subscriptions.service';
export declare class SubscriptionsController {
    private subscriptions;
    constructor(subscriptions: SubscriptionsService);
    getStatus(user: any): Promise<{
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
    getHistory(user: any): Promise<{
        id: number;
        createdAt: Date;
        expiresAt: Date;
        shopId: number;
        amount: import("@prisma/client/runtime/library").Decimal;
        paymentRef: string | null;
        startsAt: Date;
    }[]>;
    initiate(user: any, returnUrl: string): Promise<{
        paymentUrl: any;
        token: any;
        ref: string;
    }>;
    webhook(body: any): Promise<void>;
}

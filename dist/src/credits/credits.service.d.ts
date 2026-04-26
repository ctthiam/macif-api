import { PrismaService } from '../prisma/prisma.service';
import { PayCreditDto } from './dto/credit.dto';
export declare class CreditsService {
    private prisma;
    constructor(prisma: PrismaService);
    findAll(shopId: number, customerId?: number): import("@prisma/client").Prisma.PrismaPromise<({
        customer: {
            name: string;
            phone: string | null;
            id: number;
        };
        payments: {
            id: number;
            createdAt: Date;
            userId: number;
            note: string | null;
            paymentMethod: import("@prisma/client").$Enums.PaymentMethod;
            amount: import("@prisma/client/runtime/library").Decimal;
            creditId: number;
        }[];
    } & {
        id: number;
        createdAt: Date;
        updatedAt: Date;
        shopId: number;
        customerId: number;
        notes: string | null;
        dueDate: Date | null;
        saleId: number | null;
        amountTotal: import("@prisma/client/runtime/library").Decimal;
        amountPaid: import("@prisma/client/runtime/library").Decimal;
        amountRemaining: import("@prisma/client/runtime/library").Decimal;
        status: import("@prisma/client").$Enums.CreditStatus;
    })[]>;
    pay(shopId: number, userId: number, creditId: number, dto: PayCreditDto): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        shopId: number;
        customerId: number;
        notes: string | null;
        dueDate: Date | null;
        saleId: number | null;
        amountTotal: import("@prisma/client/runtime/library").Decimal;
        amountPaid: import("@prisma/client/runtime/library").Decimal;
        amountRemaining: import("@prisma/client/runtime/library").Decimal;
        status: import("@prisma/client").$Enums.CreditStatus;
    }>;
}

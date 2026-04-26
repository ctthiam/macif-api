import { CreditsService } from './credits.service';
import { PayCreditDto } from './dto/credit.dto';
export declare class CreditsController {
    private credits;
    constructor(credits: CreditsService);
    findAll(user: any, customerId?: string): import("@prisma/client").Prisma.PrismaPromise<({
        customer: {
            id: number;
            name: string;
            phone: string | null;
        };
        payments: {
            id: number;
            createdAt: Date;
            userId: number;
            note: string | null;
            paymentMethod: import("@prisma/client").$Enums.PaymentMethod;
            creditId: number;
            amount: import("@prisma/client/runtime/library").Decimal;
        }[];
    } & {
        id: number;
        createdAt: Date;
        updatedAt: Date;
        shopId: number;
        customerId: number;
        notes: string | null;
        saleId: number | null;
        amountTotal: import("@prisma/client/runtime/library").Decimal;
        amountPaid: import("@prisma/client/runtime/library").Decimal;
        amountRemaining: import("@prisma/client/runtime/library").Decimal;
        dueDate: Date | null;
        status: import("@prisma/client").$Enums.CreditStatus;
    })[]>;
    pay(user: any, id: number, dto: PayCreditDto): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        shopId: number;
        customerId: number;
        notes: string | null;
        saleId: number | null;
        amountTotal: import("@prisma/client/runtime/library").Decimal;
        amountPaid: import("@prisma/client/runtime/library").Decimal;
        amountRemaining: import("@prisma/client/runtime/library").Decimal;
        dueDate: Date | null;
        status: import("@prisma/client").$Enums.CreditStatus;
    }>;
}

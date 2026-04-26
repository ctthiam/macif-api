import { PrismaService } from '../prisma/prisma.service';
import { OpenCashRegisterDto, CloseCashRegisterDto } from './dto/cash-register.dto';
export declare class CashRegisterService {
    private prisma;
    constructor(prisma: PrismaService);
    private todayDate;
    getToday(shopId: number): Promise<{
        cashIn: number;
        totalExpenses: number;
        theoretical: number;
        user: {
            name: string;
            id: number;
        };
        id: number;
        createdAt: Date;
        updatedAt: Date;
        shopId: number;
        userId: number;
        notes: string | null;
        status: import("@prisma/client").$Enums.CashRegisterStatus;
        date: Date;
        openingAmount: import("@prisma/client/runtime/library").Decimal;
        closingAmount: import("@prisma/client/runtime/library").Decimal | null;
        theoreticalAmount: import("@prisma/client/runtime/library").Decimal | null;
        difference: import("@prisma/client/runtime/library").Decimal | null;
    } | null>;
    open(shopId: number, userId: number, dto: OpenCashRegisterDto): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        shopId: number;
        userId: number;
        notes: string | null;
        status: import("@prisma/client").$Enums.CashRegisterStatus;
        date: Date;
        openingAmount: import("@prisma/client/runtime/library").Decimal;
        closingAmount: import("@prisma/client/runtime/library").Decimal | null;
        theoreticalAmount: import("@prisma/client/runtime/library").Decimal | null;
        difference: import("@prisma/client/runtime/library").Decimal | null;
    }>;
    close(shopId: number, dto: CloseCashRegisterDto): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        shopId: number;
        userId: number;
        notes: string | null;
        status: import("@prisma/client").$Enums.CashRegisterStatus;
        date: Date;
        openingAmount: import("@prisma/client/runtime/library").Decimal;
        closingAmount: import("@prisma/client/runtime/library").Decimal | null;
        theoreticalAmount: import("@prisma/client/runtime/library").Decimal | null;
        difference: import("@prisma/client/runtime/library").Decimal | null;
    }>;
    getHistory(shopId: number, limit?: number): Promise<({
        user: {
            name: string;
        };
    } & {
        id: number;
        createdAt: Date;
        updatedAt: Date;
        shopId: number;
        userId: number;
        notes: string | null;
        status: import("@prisma/client").$Enums.CashRegisterStatus;
        date: Date;
        openingAmount: import("@prisma/client/runtime/library").Decimal;
        closingAmount: import("@prisma/client/runtime/library").Decimal | null;
        theoreticalAmount: import("@prisma/client/runtime/library").Decimal | null;
        difference: import("@prisma/client/runtime/library").Decimal | null;
    })[]>;
}

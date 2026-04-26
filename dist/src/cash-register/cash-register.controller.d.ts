import { CashRegisterService } from './cash-register.service';
import { OpenCashRegisterDto, CloseCashRegisterDto } from './dto/cash-register.dto';
export declare class CashRegisterController {
    private cashRegister;
    constructor(cashRegister: CashRegisterService);
    getToday(user: any): Promise<{
        cashIn: number;
        totalExpenses: number;
        theoretical: number;
        user: {
            id: number;
            name: string;
        };
        id: number;
        createdAt: Date;
        updatedAt: Date;
        userId: number;
        shopId: number;
        notes: string | null;
        status: import("@prisma/client").$Enums.CashRegisterStatus;
        date: Date;
        openingAmount: import("@prisma/client/runtime/library").Decimal;
        closingAmount: import("@prisma/client/runtime/library").Decimal | null;
        theoreticalAmount: import("@prisma/client/runtime/library").Decimal | null;
        difference: import("@prisma/client/runtime/library").Decimal | null;
    } | null>;
    getHistory(user: any, limit?: string): Promise<({
        user: {
            name: string;
        };
    } & {
        id: number;
        createdAt: Date;
        updatedAt: Date;
        userId: number;
        shopId: number;
        notes: string | null;
        status: import("@prisma/client").$Enums.CashRegisterStatus;
        date: Date;
        openingAmount: import("@prisma/client/runtime/library").Decimal;
        closingAmount: import("@prisma/client/runtime/library").Decimal | null;
        theoreticalAmount: import("@prisma/client/runtime/library").Decimal | null;
        difference: import("@prisma/client/runtime/library").Decimal | null;
    })[]>;
    open(user: any, dto: OpenCashRegisterDto): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        userId: number;
        shopId: number;
        notes: string | null;
        status: import("@prisma/client").$Enums.CashRegisterStatus;
        date: Date;
        openingAmount: import("@prisma/client/runtime/library").Decimal;
        closingAmount: import("@prisma/client/runtime/library").Decimal | null;
        theoreticalAmount: import("@prisma/client/runtime/library").Decimal | null;
        difference: import("@prisma/client/runtime/library").Decimal | null;
    }>;
    close(user: any, dto: CloseCashRegisterDto): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        userId: number;
        shopId: number;
        notes: string | null;
        status: import("@prisma/client").$Enums.CashRegisterStatus;
        date: Date;
        openingAmount: import("@prisma/client/runtime/library").Decimal;
        closingAmount: import("@prisma/client/runtime/library").Decimal | null;
        theoreticalAmount: import("@prisma/client/runtime/library").Decimal | null;
        difference: import("@prisma/client/runtime/library").Decimal | null;
    }>;
}

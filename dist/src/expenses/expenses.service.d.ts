import { PrismaService } from '../prisma/prisma.service';
import { CreateExpenseDto } from './dto/expense.dto';
export declare class ExpensesService {
    private prisma;
    constructor(prisma: PrismaService);
    create(shopId: number, userId: number, dto: CreateExpenseDto): Promise<{
        category: import("@prisma/client").$Enums.ExpenseCategory;
        id: number;
        createdAt: Date;
        shopId: number;
        userId: number;
        date: Date;
        description: string | null;
        amount: import("@prisma/client/runtime/library").Decimal;
        isRecurring: boolean;
        recurDay: number | null;
    }>;
    findAll(shopId: number, opts: {
        startDate?: string;
        endDate?: string;
        category?: string;
        page?: number;
        limit?: number;
    }): Promise<{
        items: ({
            user: {
                name: string;
            };
        } & {
            category: import("@prisma/client").$Enums.ExpenseCategory;
            id: number;
            createdAt: Date;
            shopId: number;
            userId: number;
            date: Date;
            description: string | null;
            amount: import("@prisma/client/runtime/library").Decimal;
            isRecurring: boolean;
            recurDay: number | null;
        })[];
        total: number;
        page: number;
        pages: number;
        totalAmount: number;
    }>;
    remove(shopId: number, id: number): Promise<{
        category: import("@prisma/client").$Enums.ExpenseCategory;
        id: number;
        createdAt: Date;
        shopId: number;
        userId: number;
        date: Date;
        description: string | null;
        amount: import("@prisma/client/runtime/library").Decimal;
        isRecurring: boolean;
        recurDay: number | null;
    }>;
}

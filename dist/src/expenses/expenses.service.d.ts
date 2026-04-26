import { PrismaService } from '../prisma/prisma.service';
import { CreateExpenseDto } from './dto/expense.dto';
export declare class ExpensesService {
    private prisma;
    constructor(prisma: PrismaService);
    create(shopId: number, userId: number, dto: CreateExpenseDto): Promise<{
        id: number;
        createdAt: Date;
        userId: number;
        shopId: number;
        amount: import("@prisma/client/runtime/library").Decimal;
        date: Date;
        category: import("@prisma/client").$Enums.ExpenseCategory;
        description: string | null;
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
            id: number;
            createdAt: Date;
            userId: number;
            shopId: number;
            amount: import("@prisma/client/runtime/library").Decimal;
            date: Date;
            category: import("@prisma/client").$Enums.ExpenseCategory;
            description: string | null;
            isRecurring: boolean;
            recurDay: number | null;
        })[];
        total: number;
        page: number;
        pages: number;
        totalAmount: number;
    }>;
    remove(shopId: number, id: number): Promise<{
        id: number;
        createdAt: Date;
        userId: number;
        shopId: number;
        amount: import("@prisma/client/runtime/library").Decimal;
        date: Date;
        category: import("@prisma/client").$Enums.ExpenseCategory;
        description: string | null;
        isRecurring: boolean;
        recurDay: number | null;
    }>;
}

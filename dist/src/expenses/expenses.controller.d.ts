import { ExpensesService } from './expenses.service';
import { CreateExpenseDto } from './dto/expense.dto';
export declare class ExpensesController {
    private expenses;
    constructor(expenses: ExpensesService);
    create(user: any, dto: CreateExpenseDto): Promise<{
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
    findAll(user: any, startDate?: string, endDate?: string, category?: string, page?: string, limit?: string): Promise<{
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
    remove(user: any, id: number): Promise<{
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

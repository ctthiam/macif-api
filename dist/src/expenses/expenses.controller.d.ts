import { ExpensesService } from './expenses.service';
import { CreateExpenseDto } from './dto/expense.dto';
export declare class ExpensesController {
    private expenses;
    constructor(expenses: ExpensesService);
    create(user: any, dto: CreateExpenseDto): Promise<{
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
    findAll(user: any, startDate?: string, endDate?: string, category?: string, page?: string, limit?: string): Promise<{
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
    remove(user: any, id: number): Promise<{
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

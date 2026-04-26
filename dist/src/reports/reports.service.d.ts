import { PrismaService } from '../prisma/prisma.service';
export declare class ReportsService {
    private prisma;
    constructor(prisma: PrismaService);
    getDashboard(shopId: number): Promise<{
        todayRevenue: number;
        todaySalesCount: number;
        todayByMethod: any;
        cashBalance: number;
        monthRevenue: number;
        prevMonthRevenue: number;
        totalCredits: number;
        creditCount: number;
        lowStockCount: number;
        lowStockProducts: {
            name: string;
            id: number;
            unit: string;
            stockQty: import("@prisma/client/runtime/library").Decimal;
            stockAlert: import("@prisma/client/runtime/library").Decimal;
        }[];
        recentSales: ({
            customer: {
                name: string;
            } | null;
            items: ({
                product: {
                    name: string;
                };
            } & {
                id: number;
                quantity: import("@prisma/client/runtime/library").Decimal;
                unitPrice: import("@prisma/client/runtime/library").Decimal;
                productId: number;
                totalPrice: import("@prisma/client/runtime/library").Decimal;
                saleId: number;
            })[];
        } & {
            id: number;
            createdAt: Date;
            shopId: number;
            userId: number;
            reference: string;
            customerId: number | null;
            paymentMethod: import("@prisma/client").$Enums.PaymentMethod;
            paidAmount: import("@prisma/client/runtime/library").Decimal;
            discount: import("@prisma/client/runtime/library").Decimal;
            notes: string | null;
            totalAmount: import("@prisma/client/runtime/library").Decimal;
            netAmount: import("@prisma/client/runtime/library").Decimal;
            creditAmount: import("@prisma/client/runtime/library").Decimal;
        })[];
    }>;
    getDaily(shopId: number, date?: string): Promise<{
        date: string;
        revenue: number;
        salesCount: number;
        expenses: number;
        profit: number;
        sales: ({
            items: ({
                product: {
                    name: string;
                };
            } & {
                id: number;
                quantity: import("@prisma/client/runtime/library").Decimal;
                unitPrice: import("@prisma/client/runtime/library").Decimal;
                productId: number;
                totalPrice: import("@prisma/client/runtime/library").Decimal;
                saleId: number;
            })[];
        } & {
            id: number;
            createdAt: Date;
            shopId: number;
            userId: number;
            reference: string;
            customerId: number | null;
            paymentMethod: import("@prisma/client").$Enums.PaymentMethod;
            paidAmount: import("@prisma/client/runtime/library").Decimal;
            discount: import("@prisma/client/runtime/library").Decimal;
            notes: string | null;
            totalAmount: import("@prisma/client/runtime/library").Decimal;
            netAmount: import("@prisma/client/runtime/library").Decimal;
            creditAmount: import("@prisma/client/runtime/library").Decimal;
        })[];
        expensesList: {
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
        }[];
    }>;
    getMonthly(shopId: number, year?: number, month?: number): Promise<{
        month: number;
        year: number;
        totalRevenue: number;
        totalSales: number;
        cashRevenue: number;
        waveRevenue: number;
        orangeMoneyRevenue: number;
        creditRevenue: number;
        expenses: number;
        profit: number;
        topProducts: {
            name: string;
            unit: string;
            totalRevenue: number;
            totalQty: number;
        }[];
    }>;
    getStockValue(shopId: number): Promise<{
        totalValue: number;
        totalBuyValue: number;
        potentialProfit: number;
        totalProducts: number;
        lowStockCount: number;
    }>;
}

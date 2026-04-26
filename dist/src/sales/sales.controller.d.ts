import { SalesService } from './sales.service';
import { CreateSaleDto } from './dto/sale.dto';
export declare class SalesController {
    private sales;
    constructor(sales: SalesService);
    create(user: any, dto: CreateSaleDto): Promise<{
        items: ({
            product: {
                name: string;
                unit: string;
            };
        } & {
            id: number;
            productId: number;
            quantity: import("@prisma/client/runtime/library").Decimal;
            unitPrice: import("@prisma/client/runtime/library").Decimal;
            saleId: number;
            totalPrice: import("@prisma/client/runtime/library").Decimal;
        })[];
    } & {
        id: number;
        createdAt: Date;
        userId: number;
        shopId: number;
        reference: string;
        customerId: number | null;
        totalAmount: import("@prisma/client/runtime/library").Decimal;
        discount: import("@prisma/client/runtime/library").Decimal;
        netAmount: import("@prisma/client/runtime/library").Decimal;
        paymentMethod: import("@prisma/client").$Enums.PaymentMethod;
        paidAmount: import("@prisma/client/runtime/library").Decimal;
        creditAmount: import("@prisma/client/runtime/library").Decimal;
        notes: string | null;
    }>;
    findAll(user: any, startDate?: string, endDate?: string, paymentMethod?: string, userId?: string, limit?: string, page?: string): Promise<{
        items: ({
            user: {
                name: string;
            };
            customer: {
                name: string;
                phone: string | null;
            } | null;
            items: ({
                product: {
                    name: string;
                    unit: string;
                };
            } & {
                id: number;
                productId: number;
                quantity: import("@prisma/client/runtime/library").Decimal;
                unitPrice: import("@prisma/client/runtime/library").Decimal;
                saleId: number;
                totalPrice: import("@prisma/client/runtime/library").Decimal;
            })[];
        } & {
            id: number;
            createdAt: Date;
            userId: number;
            shopId: number;
            reference: string;
            customerId: number | null;
            totalAmount: import("@prisma/client/runtime/library").Decimal;
            discount: import("@prisma/client/runtime/library").Decimal;
            netAmount: import("@prisma/client/runtime/library").Decimal;
            paymentMethod: import("@prisma/client").$Enums.PaymentMethod;
            paidAmount: import("@prisma/client/runtime/library").Decimal;
            creditAmount: import("@prisma/client/runtime/library").Decimal;
            notes: string | null;
        })[];
        total: number;
        page: number;
        limit: number;
        pages: number;
    }>;
    getSummary(user: any, period?: 'today' | 'week' | 'month'): Promise<{
        total: number;
        count: number;
        byMethod: Record<string, number>;
        period: "week" | "today" | "month";
    }>;
    findOne(user: any, id: number): Promise<{
        user: {
            name: string;
        };
        customer: {
            id: number;
            name: string;
            phone: string | null;
        } | null;
        credits: {
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
        }[];
        items: ({
            product: {
                name: string;
                unit: string;
                photoUrl: string | null;
            };
        } & {
            id: number;
            productId: number;
            quantity: import("@prisma/client/runtime/library").Decimal;
            unitPrice: import("@prisma/client/runtime/library").Decimal;
            saleId: number;
            totalPrice: import("@prisma/client/runtime/library").Decimal;
        })[];
    } & {
        id: number;
        createdAt: Date;
        userId: number;
        shopId: number;
        reference: string;
        customerId: number | null;
        totalAmount: import("@prisma/client/runtime/library").Decimal;
        discount: import("@prisma/client/runtime/library").Decimal;
        netAmount: import("@prisma/client/runtime/library").Decimal;
        paymentMethod: import("@prisma/client").$Enums.PaymentMethod;
        paidAmount: import("@prisma/client/runtime/library").Decimal;
        creditAmount: import("@prisma/client/runtime/library").Decimal;
        notes: string | null;
    }>;
}

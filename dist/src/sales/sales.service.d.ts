import { PrismaService } from '../prisma/prisma.service';
import { CreateSaleDto } from './dto/sale.dto';
export declare class SalesService {
    private prisma;
    constructor(prisma: PrismaService);
    create(shopId: number, userId: number, dto: CreateSaleDto): Promise<{
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
    findAll(shopId: number, filters: {
        startDate?: string;
        endDate?: string;
        paymentMethod?: string;
        userId?: number;
        limit?: number;
        page?: number;
    }): Promise<{
        items: ({
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
            user: {
                name: string;
            };
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
    findOne(shopId: number, id: number): Promise<{
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
        customer: {
            id: number;
            name: string;
            phone: string | null;
        } | null;
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
        user: {
            name: string;
        };
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
    getSummary(shopId: number, period: 'today' | 'week' | 'month'): Promise<{
        total: number;
        count: number;
        byMethod: Record<string, number>;
        period: "week" | "today" | "month";
    }>;
    private generateReference;
}

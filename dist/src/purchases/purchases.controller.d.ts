import { PurchasesService } from './purchases.service';
import { CreatePurchaseDto } from './dto/purchase.dto';
export declare class PurchasesController {
    private purchases;
    constructor(purchases: PurchasesService);
    findAll(user: any, supplierId?: string, page?: string, limit?: string): Promise<{
        items: ({
            supplier: {
                id: number;
                name: string;
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
                totalPrice: import("@prisma/client/runtime/library").Decimal;
                purchaseId: number;
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
            totalAmount: import("@prisma/client/runtime/library").Decimal;
            paymentMethod: import("@prisma/client").$Enums.PaymentMethod;
            paidAmount: import("@prisma/client/runtime/library").Decimal;
            notes: string | null;
            supplierId: number | null;
            deliveryDate: Date | null;
        })[];
        total: number;
        page: number;
        pages: number;
    }>;
    findOne(user: any, id: number): Promise<{
        supplier: {
            id: number;
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
            totalPrice: import("@prisma/client/runtime/library").Decimal;
            purchaseId: number;
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
        totalAmount: import("@prisma/client/runtime/library").Decimal;
        paymentMethod: import("@prisma/client").$Enums.PaymentMethod;
        paidAmount: import("@prisma/client/runtime/library").Decimal;
        notes: string | null;
        supplierId: number | null;
        deliveryDate: Date | null;
    }>;
    create(user: any, dto: CreatePurchaseDto): Promise<{
        supplier: {
            name: string;
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
            totalPrice: import("@prisma/client/runtime/library").Decimal;
            purchaseId: number;
        })[];
    } & {
        id: number;
        createdAt: Date;
        userId: number;
        shopId: number;
        reference: string;
        totalAmount: import("@prisma/client/runtime/library").Decimal;
        paymentMethod: import("@prisma/client").$Enums.PaymentMethod;
        paidAmount: import("@prisma/client/runtime/library").Decimal;
        notes: string | null;
        supplierId: number | null;
        deliveryDate: Date | null;
    }>;
}

import { PurchasesService } from './purchases.service';
import { CreatePurchaseDto } from './dto/purchase.dto';
export declare class PurchasesController {
    private purchases;
    constructor(purchases: PurchasesService);
    findAll(user: any, supplierId?: string, page?: string, limit?: string): Promise<{
        items: ({
            user: {
                name: string;
            };
            supplier: {
                name: string;
                id: number;
            } | null;
            items: ({
                product: {
                    name: string;
                    unit: string;
                };
            } & {
                id: number;
                quantity: import("@prisma/client/runtime/library").Decimal;
                unitPrice: import("@prisma/client/runtime/library").Decimal;
                productId: number;
                totalPrice: import("@prisma/client/runtime/library").Decimal;
                purchaseId: number;
            })[];
        } & {
            id: number;
            createdAt: Date;
            shopId: number;
            userId: number;
            reference: string;
            paymentMethod: import("@prisma/client").$Enums.PaymentMethod;
            paidAmount: import("@prisma/client/runtime/library").Decimal;
            notes: string | null;
            totalAmount: import("@prisma/client/runtime/library").Decimal;
            supplierId: number | null;
            deliveryDate: Date | null;
        })[];
        total: number;
        page: number;
        pages: number;
    }>;
    findOne(user: any, id: number): Promise<{
        user: {
            name: string;
        };
        supplier: {
            name: string;
            phone: string | null;
            id: number;
        } | null;
        items: ({
            product: {
                name: string;
                unit: string;
            };
        } & {
            id: number;
            quantity: import("@prisma/client/runtime/library").Decimal;
            unitPrice: import("@prisma/client/runtime/library").Decimal;
            productId: number;
            totalPrice: import("@prisma/client/runtime/library").Decimal;
            purchaseId: number;
        })[];
    } & {
        id: number;
        createdAt: Date;
        shopId: number;
        userId: number;
        reference: string;
        paymentMethod: import("@prisma/client").$Enums.PaymentMethod;
        paidAmount: import("@prisma/client/runtime/library").Decimal;
        notes: string | null;
        totalAmount: import("@prisma/client/runtime/library").Decimal;
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
            quantity: import("@prisma/client/runtime/library").Decimal;
            unitPrice: import("@prisma/client/runtime/library").Decimal;
            productId: number;
            totalPrice: import("@prisma/client/runtime/library").Decimal;
            purchaseId: number;
        })[];
    } & {
        id: number;
        createdAt: Date;
        shopId: number;
        userId: number;
        reference: string;
        paymentMethod: import("@prisma/client").$Enums.PaymentMethod;
        paidAmount: import("@prisma/client/runtime/library").Decimal;
        notes: string | null;
        totalAmount: import("@prisma/client/runtime/library").Decimal;
        supplierId: number | null;
        deliveryDate: Date | null;
    }>;
}

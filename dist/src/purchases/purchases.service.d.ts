import { PrismaService } from '../prisma/prisma.service';
import { CreatePurchaseDto } from './dto/purchase.dto';
export declare class PurchasesService {
    private prisma;
    constructor(prisma: PrismaService);
    findAll(shopId: number, opts: {
        supplierId?: number;
        page?: number;
        limit?: number;
    }): Promise<{
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
    findOne(shopId: number, id: number): Promise<{
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
    create(shopId: number, userId: number, dto: CreatePurchaseDto): Promise<{
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
    private generateReference;
}

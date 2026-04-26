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
    findOne(shopId: number, id: number): Promise<{
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
    private generateReference;
}

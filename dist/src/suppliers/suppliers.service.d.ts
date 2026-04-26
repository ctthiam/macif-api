import { PrismaService } from '../prisma/prisma.service';
import { CreateSupplierDto, UpdateSupplierDto } from './dto/supplier.dto';
export declare class SuppliersService {
    private prisma;
    constructor(prisma: PrismaService);
    findAll(shopId: number, search?: string): import("@prisma/client").Prisma.PrismaPromise<({
        _count: {
            purchases: number;
        };
    } & {
        id: number;
        name: string;
        phone: string | null;
        createdAt: Date;
        updatedAt: Date;
        address: string | null;
        shopId: number;
        deletedAt: Date | null;
        debtBalance: import("@prisma/client/runtime/library").Decimal;
    })[]>;
    findOne(shopId: number, id: number): Promise<{
        purchases: ({
            user: {
                name: string;
            };
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
        })[];
    } & {
        id: number;
        name: string;
        phone: string | null;
        createdAt: Date;
        updatedAt: Date;
        address: string | null;
        shopId: number;
        deletedAt: Date | null;
        debtBalance: import("@prisma/client/runtime/library").Decimal;
    }>;
    create(shopId: number, dto: CreateSupplierDto): import("@prisma/client").Prisma.Prisma__SupplierClient<{
        id: number;
        name: string;
        phone: string | null;
        createdAt: Date;
        updatedAt: Date;
        address: string | null;
        shopId: number;
        deletedAt: Date | null;
        debtBalance: import("@prisma/client/runtime/library").Decimal;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    update(shopId: number, id: number, dto: UpdateSupplierDto): Promise<{
        id: number;
        name: string;
        phone: string | null;
        createdAt: Date;
        updatedAt: Date;
        address: string | null;
        shopId: number;
        deletedAt: Date | null;
        debtBalance: import("@prisma/client/runtime/library").Decimal;
    }>;
    softDelete(shopId: number, id: number): Promise<{
        id: number;
        name: string;
        phone: string | null;
        createdAt: Date;
        updatedAt: Date;
        address: string | null;
        shopId: number;
        deletedAt: Date | null;
        debtBalance: import("@prisma/client/runtime/library").Decimal;
    }>;
    private assertExists;
}

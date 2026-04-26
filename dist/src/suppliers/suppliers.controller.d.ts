import { SuppliersService } from './suppliers.service';
import { CreateSupplierDto, UpdateSupplierDto } from './dto/supplier.dto';
export declare class SuppliersController {
    private suppliers;
    constructor(suppliers: SuppliersService);
    findAll(user: any, search?: string): import("@prisma/client").Prisma.PrismaPromise<({
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
    findOne(user: any, id: number): Promise<{
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
    create(user: any, dto: CreateSupplierDto): import("@prisma/client").Prisma.Prisma__SupplierClient<{
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
    update(user: any, id: number, dto: UpdateSupplierDto): Promise<{
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
    remove(user: any, id: number): Promise<{
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
}

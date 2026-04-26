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
        name: string;
        phone: string | null;
        id: number;
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
    } & {
        name: string;
        phone: string | null;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        address: string | null;
        shopId: number;
        deletedAt: Date | null;
        debtBalance: import("@prisma/client/runtime/library").Decimal;
    }>;
    create(user: any, dto: CreateSupplierDto): import("@prisma/client").Prisma.Prisma__SupplierClient<{
        name: string;
        phone: string | null;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        address: string | null;
        shopId: number;
        deletedAt: Date | null;
        debtBalance: import("@prisma/client/runtime/library").Decimal;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    update(user: any, id: number, dto: UpdateSupplierDto): Promise<{
        name: string;
        phone: string | null;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        address: string | null;
        shopId: number;
        deletedAt: Date | null;
        debtBalance: import("@prisma/client/runtime/library").Decimal;
    }>;
    remove(user: any, id: number): Promise<{
        name: string;
        phone: string | null;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        address: string | null;
        shopId: number;
        deletedAt: Date | null;
        debtBalance: import("@prisma/client/runtime/library").Decimal;
    }>;
}

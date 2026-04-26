import { PrismaService } from '../prisma/prisma.service';
import { CreateCustomerDto, UpdateCustomerDto } from './dto/customer.dto';
export declare class CustomersService {
    private prisma;
    constructor(prisma: PrismaService);
    findAll(shopId: number, search?: string): import("@prisma/client").Prisma.PrismaPromise<{
        name: string;
        phone: string | null;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        address: string | null;
        shopId: number;
        deletedAt: Date | null;
        type: import("@prisma/client").$Enums.CustomerType;
        isVip: boolean;
        totalBought: import("@prisma/client/runtime/library").Decimal;
        creditBalance: import("@prisma/client/runtime/library").Decimal;
    }[]>;
    findOne(shopId: number, id: number): Promise<{
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
        credits: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            shopId: number;
            customerId: number;
            notes: string | null;
            dueDate: Date | null;
            saleId: number | null;
            amountTotal: import("@prisma/client/runtime/library").Decimal;
            amountPaid: import("@prisma/client/runtime/library").Decimal;
            amountRemaining: import("@prisma/client/runtime/library").Decimal;
            status: import("@prisma/client").$Enums.CreditStatus;
        }[];
    } & {
        name: string;
        phone: string | null;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        address: string | null;
        shopId: number;
        deletedAt: Date | null;
        type: import("@prisma/client").$Enums.CustomerType;
        isVip: boolean;
        totalBought: import("@prisma/client/runtime/library").Decimal;
        creditBalance: import("@prisma/client/runtime/library").Decimal;
    }>;
    create(shopId: number, dto: CreateCustomerDto): import("@prisma/client").Prisma.Prisma__CustomerClient<{
        name: string;
        phone: string | null;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        address: string | null;
        shopId: number;
        deletedAt: Date | null;
        type: import("@prisma/client").$Enums.CustomerType;
        isVip: boolean;
        totalBought: import("@prisma/client/runtime/library").Decimal;
        creditBalance: import("@prisma/client/runtime/library").Decimal;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    update(shopId: number, id: number, dto: UpdateCustomerDto): Promise<{
        name: string;
        phone: string | null;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        address: string | null;
        shopId: number;
        deletedAt: Date | null;
        type: import("@prisma/client").$Enums.CustomerType;
        isVip: boolean;
        totalBought: import("@prisma/client/runtime/library").Decimal;
        creditBalance: import("@prisma/client/runtime/library").Decimal;
    }>;
    softDelete(shopId: number, id: number): Promise<void>;
    private assertExists;
}

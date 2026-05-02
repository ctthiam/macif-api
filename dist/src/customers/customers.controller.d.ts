import { CustomersService } from './customers.service';
import { CreateCustomerDto, UpdateCustomerDto } from './dto/customer.dto';
export declare class CustomersController {
    private customers;
    constructor(customers: CustomersService);
    findAll(user: any, search?: string): import("@prisma/client").Prisma.PrismaPromise<{
        id: number;
        name: string;
        phone: string | null;
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
    findOne(user: any, id: number): Promise<{
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
        sales: ({
            items: ({
                product: {
                    name: string;
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
    } & {
        id: number;
        name: string;
        phone: string | null;
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
    create(user: any, dto: CreateCustomerDto): import("@prisma/client").Prisma.Prisma__CustomerClient<{
        id: number;
        name: string;
        phone: string | null;
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
    update(user: any, id: number, dto: UpdateCustomerDto): Promise<{
        id: number;
        name: string;
        phone: string | null;
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
    remove(user: any, id: number): Promise<void>;
}

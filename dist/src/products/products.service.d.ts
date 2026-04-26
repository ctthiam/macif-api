import { PrismaService } from '../prisma/prisma.service';
import { CreateProductDto, UpdateProductDto, AdjustStockDto } from './dto/product.dto';
export declare class ProductsService {
    private prisma;
    constructor(prisma: PrismaService);
    findAll(shopId: number, filters: {
        categoryId?: number;
        lowStock?: boolean;
        search?: string;
        limit?: number;
    }): Promise<({
        category: {
            id: number;
            name: string;
            createdAt: Date;
            shopId: number;
            icon: string | null;
            color: string | null;
        } | null;
    } & {
        id: number;
        name: string;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
        shopId: number;
        categoryId: number | null;
        reference: string | null;
        unit: string;
        buyPrice: import("@prisma/client/runtime/library").Decimal;
        sellPrice: import("@prisma/client/runtime/library").Decimal;
        sellPriceGros: import("@prisma/client/runtime/library").Decimal | null;
        stockQty: import("@prisma/client/runtime/library").Decimal;
        stockAlert: import("@prisma/client/runtime/library").Decimal;
        photoUrl: string | null;
        deletedAt: Date | null;
    })[]>;
    findLowStock(shopId: number): Promise<({
        category: {
            id: number;
            name: string;
            createdAt: Date;
            shopId: number;
            icon: string | null;
            color: string | null;
        } | null;
    } & {
        id: number;
        name: string;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
        shopId: number;
        categoryId: number | null;
        reference: string | null;
        unit: string;
        buyPrice: import("@prisma/client/runtime/library").Decimal;
        sellPrice: import("@prisma/client/runtime/library").Decimal;
        sellPriceGros: import("@prisma/client/runtime/library").Decimal | null;
        stockQty: import("@prisma/client/runtime/library").Decimal;
        stockAlert: import("@prisma/client/runtime/library").Decimal;
        photoUrl: string | null;
        deletedAt: Date | null;
    })[]>;
    findOne(shopId: number, id: number): Promise<{
        category: {
            id: number;
            name: string;
            createdAt: Date;
            shopId: number;
            icon: string | null;
            color: string | null;
        } | null;
        stockMovements: ({
            user: {
                name: string;
            };
        } & {
            id: number;
            createdAt: Date;
            userId: number;
            shopId: number;
            productId: number;
            type: import("@prisma/client").$Enums.StockMovementType;
            quantity: import("@prisma/client/runtime/library").Decimal;
            unitPrice: import("@prisma/client/runtime/library").Decimal | null;
            referenceType: string | null;
            referenceId: number | null;
            note: string | null;
        })[];
    } & {
        id: number;
        name: string;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
        shopId: number;
        categoryId: number | null;
        reference: string | null;
        unit: string;
        buyPrice: import("@prisma/client/runtime/library").Decimal;
        sellPrice: import("@prisma/client/runtime/library").Decimal;
        sellPriceGros: import("@prisma/client/runtime/library").Decimal | null;
        stockQty: import("@prisma/client/runtime/library").Decimal;
        stockAlert: import("@prisma/client/runtime/library").Decimal;
        photoUrl: string | null;
        deletedAt: Date | null;
    }>;
    create(shopId: number, userId: number, dto: CreateProductDto): Promise<{
        category: {
            id: number;
            name: string;
            createdAt: Date;
            shopId: number;
            icon: string | null;
            color: string | null;
        } | null;
    } & {
        id: number;
        name: string;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
        shopId: number;
        categoryId: number | null;
        reference: string | null;
        unit: string;
        buyPrice: import("@prisma/client/runtime/library").Decimal;
        sellPrice: import("@prisma/client/runtime/library").Decimal;
        sellPriceGros: import("@prisma/client/runtime/library").Decimal | null;
        stockQty: import("@prisma/client/runtime/library").Decimal;
        stockAlert: import("@prisma/client/runtime/library").Decimal;
        photoUrl: string | null;
        deletedAt: Date | null;
    }>;
    update(shopId: number, id: number, dto: UpdateProductDto): Promise<{
        category: {
            id: number;
            name: string;
            createdAt: Date;
            shopId: number;
            icon: string | null;
            color: string | null;
        } | null;
    } & {
        id: number;
        name: string;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
        shopId: number;
        categoryId: number | null;
        reference: string | null;
        unit: string;
        buyPrice: import("@prisma/client/runtime/library").Decimal;
        sellPrice: import("@prisma/client/runtime/library").Decimal;
        sellPriceGros: import("@prisma/client/runtime/library").Decimal | null;
        stockQty: import("@prisma/client/runtime/library").Decimal;
        stockAlert: import("@prisma/client/runtime/library").Decimal;
        photoUrl: string | null;
        deletedAt: Date | null;
    }>;
    softDelete(shopId: number, id: number): Promise<void>;
    adjustStock(shopId: number, id: number, userId: number, dto: AdjustStockDto): Promise<{
        id: number;
        name: string;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
        shopId: number;
        categoryId: number | null;
        reference: string | null;
        unit: string;
        buyPrice: import("@prisma/client/runtime/library").Decimal;
        sellPrice: import("@prisma/client/runtime/library").Decimal;
        sellPriceGros: import("@prisma/client/runtime/library").Decimal | null;
        stockQty: import("@prisma/client/runtime/library").Decimal;
        stockAlert: import("@prisma/client/runtime/library").Decimal;
        photoUrl: string | null;
        deletedAt: Date | null;
    }>;
    private assertExists;
}

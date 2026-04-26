import { ProductsService } from './products.service';
import { CreateProductDto, UpdateProductDto, AdjustStockDto } from './dto/product.dto';
export declare class ProductsController {
    private products;
    constructor(products: ProductsService);
    findAll(user: any, categoryId?: string, lowStock?: string, search?: string, limit?: string): Promise<({
        category: {
            name: string;
            id: number;
            createdAt: Date;
            shopId: number;
            icon: string | null;
            color: string | null;
        } | null;
    } & {
        name: string;
        id: number;
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
    findLowStock(user: any): Promise<({
        category: {
            name: string;
            id: number;
            createdAt: Date;
            shopId: number;
            icon: string | null;
            color: string | null;
        } | null;
    } & {
        name: string;
        id: number;
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
    findOne(user: any, id: number): Promise<{
        category: {
            name: string;
            id: number;
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
            shopId: number;
            userId: number;
            quantity: import("@prisma/client/runtime/library").Decimal;
            note: string | null;
            type: import("@prisma/client").$Enums.StockMovementType;
            unitPrice: import("@prisma/client/runtime/library").Decimal | null;
            referenceType: string | null;
            referenceId: number | null;
            productId: number;
        })[];
    } & {
        name: string;
        id: number;
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
    create(user: any, dto: CreateProductDto): Promise<{
        category: {
            name: string;
            id: number;
            createdAt: Date;
            shopId: number;
            icon: string | null;
            color: string | null;
        } | null;
    } & {
        name: string;
        id: number;
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
    update(user: any, id: number, dto: UpdateProductDto): Promise<{
        category: {
            name: string;
            id: number;
            createdAt: Date;
            shopId: number;
            icon: string | null;
            color: string | null;
        } | null;
    } & {
        name: string;
        id: number;
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
    softDelete(user: any, id: number): Promise<void>;
    adjustStock(user: any, id: number, dto: AdjustStockDto): Promise<{
        name: string;
        id: number;
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
}

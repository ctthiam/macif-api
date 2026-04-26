export declare class CreateProductDto {
    name: string;
    categoryId?: number;
    reference?: string;
    unit?: string;
    buyPrice?: number;
    sellPrice: number;
    sellPriceGros?: number;
    stockQty?: number;
    stockAlert?: number;
}
export declare class UpdateProductDto extends CreateProductDto {
}
export declare class AdjustStockDto {
    quantity: number;
    note?: string;
}

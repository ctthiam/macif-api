export declare class SaleItemDto {
    productId: number;
    quantity: number;
    unitPrice: number;
}
export declare class CreateSaleDto {
    customerId?: number;
    items: SaleItemDto[];
    paymentMethod: string;
    paidAmount: number;
    discount?: number;
    notes?: string;
    dueDate?: string;
}

export declare class PurchaseItemDto {
    productId: number;
    quantity: number;
    unitPrice: number;
}
export declare class CreatePurchaseDto {
    supplierId?: number;
    items: PurchaseItemDto[];
    paidAmount: number;
    paymentMethod: string;
    deliveryDate?: string;
    notes?: string;
}

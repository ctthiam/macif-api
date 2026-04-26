export declare const UserRole: {
    readonly owner: "owner";
    readonly seller: "seller";
};
export type UserRole = (typeof UserRole)[keyof typeof UserRole];
export declare const Plan: {
    readonly trial: "trial";
    readonly active: "active";
    readonly expired: "expired";
};
export type Plan = (typeof Plan)[keyof typeof Plan];
export declare const PaymentMethod: {
    readonly cash: "cash";
    readonly wave: "wave";
    readonly orange_money: "orange_money";
    readonly credit: "credit";
    readonly mixed: "mixed";
};
export type PaymentMethod = (typeof PaymentMethod)[keyof typeof PaymentMethod];
export declare const CreditStatus: {
    readonly open: "open";
    readonly partial: "partial";
    readonly paid: "paid";
    readonly overdue: "overdue";
};
export type CreditStatus = (typeof CreditStatus)[keyof typeof CreditStatus];
export declare const CashRegisterStatus: {
    readonly open: "open";
    readonly closed: "closed";
};
export type CashRegisterStatus = (typeof CashRegisterStatus)[keyof typeof CashRegisterStatus];
export declare const StockMovementType: {
    readonly sale: "sale";
    readonly purchase: "purchase";
    readonly adjustment: "adjustment";
    readonly return: "return";
    readonly loss: "loss";
};
export type StockMovementType = (typeof StockMovementType)[keyof typeof StockMovementType];
export declare const InvoiceType: {
    readonly invoice: "invoice";
    readonly quote: "quote";
    readonly credit_note: "credit_note";
};
export type InvoiceType = (typeof InvoiceType)[keyof typeof InvoiceType];
export declare const InvoiceStatus: {
    readonly draft: "draft";
    readonly sent: "sent";
    readonly paid: "paid";
    readonly cancelled: "cancelled";
};
export type InvoiceStatus = (typeof InvoiceStatus)[keyof typeof InvoiceStatus];
export declare const ExpenseCategory: {
    readonly rent: "rent";
    readonly electricity: "electricity";
    readonly water: "water";
    readonly salary: "salary";
    readonly transport: "transport";
    readonly supplier: "supplier";
    readonly other: "other";
};
export type ExpenseCategory = (typeof ExpenseCategory)[keyof typeof ExpenseCategory];
export declare const CustomerType: {
    readonly individual: "individual";
    readonly professional: "professional";
    readonly btp: "btp";
};
export type CustomerType = (typeof CustomerType)[keyof typeof CustomerType];

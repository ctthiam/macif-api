"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.NullsOrder = exports.QueryMode = exports.SortOrder = exports.SubscriptionScalarFieldEnum = exports.InvoiceScalarFieldEnum = exports.ExpenseScalarFieldEnum = exports.PurchaseItemScalarFieldEnum = exports.PurchaseScalarFieldEnum = exports.SupplierScalarFieldEnum = exports.CashRegisterScalarFieldEnum = exports.CreditPaymentScalarFieldEnum = exports.CreditScalarFieldEnum = exports.SaleItemScalarFieldEnum = exports.SaleScalarFieldEnum = exports.CustomerScalarFieldEnum = exports.StockMovementScalarFieldEnum = exports.ProductScalarFieldEnum = exports.CategoryScalarFieldEnum = exports.ShopUserScalarFieldEnum = exports.ShopScalarFieldEnum = exports.RefreshTokenScalarFieldEnum = exports.UserScalarFieldEnum = exports.TransactionIsolationLevel = exports.ModelName = exports.AnyNull = exports.JsonNull = exports.DbNull = exports.NullTypes = exports.Decimal = void 0;
const runtime = __importStar(require("@prisma/client/runtime/index-browser"));
exports.Decimal = runtime.Decimal;
exports.NullTypes = {
    DbNull: runtime.NullTypes.DbNull,
    JsonNull: runtime.NullTypes.JsonNull,
    AnyNull: runtime.NullTypes.AnyNull,
};
exports.DbNull = runtime.DbNull;
exports.JsonNull = runtime.JsonNull;
exports.AnyNull = runtime.AnyNull;
exports.ModelName = {
    User: 'User',
    RefreshToken: 'RefreshToken',
    Shop: 'Shop',
    ShopUser: 'ShopUser',
    Category: 'Category',
    Product: 'Product',
    StockMovement: 'StockMovement',
    Customer: 'Customer',
    Sale: 'Sale',
    SaleItem: 'SaleItem',
    Credit: 'Credit',
    CreditPayment: 'CreditPayment',
    CashRegister: 'CashRegister',
    Supplier: 'Supplier',
    Purchase: 'Purchase',
    PurchaseItem: 'PurchaseItem',
    Expense: 'Expense',
    Invoice: 'Invoice',
    Subscription: 'Subscription'
};
exports.TransactionIsolationLevel = runtime.makeStrictEnum({
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
});
exports.UserScalarFieldEnum = {
    id: 'id',
    name: 'name',
    phone: 'phone',
    email: 'email',
    passwordHash: 'passwordHash',
    pinHash: 'pinHash',
    isActive: 'isActive',
    lastLoginAt: 'lastLoginAt',
    lastLoginIp: 'lastLoginIp',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.RefreshTokenScalarFieldEnum = {
    id: 'id',
    userId: 'userId',
    token: 'token',
    expiresAt: 'expiresAt',
    createdAt: 'createdAt'
};
exports.ShopScalarFieldEnum = {
    id: 'id',
    ownerId: 'ownerId',
    name: 'name',
    phone: 'phone',
    address: 'address',
    city: 'city',
    logoUrl: 'logoUrl',
    primaryColor: 'primaryColor',
    currency: 'currency',
    plan: 'plan',
    trialEndsAt: 'trialEndsAt',
    planExpiresAt: 'planExpiresAt',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.ShopUserScalarFieldEnum = {
    id: 'id',
    shopId: 'shopId',
    userId: 'userId',
    role: 'role',
    createdAt: 'createdAt'
};
exports.CategoryScalarFieldEnum = {
    id: 'id',
    shopId: 'shopId',
    name: 'name',
    icon: 'icon',
    color: 'color',
    createdAt: 'createdAt'
};
exports.ProductScalarFieldEnum = {
    id: 'id',
    shopId: 'shopId',
    categoryId: 'categoryId',
    name: 'name',
    reference: 'reference',
    unit: 'unit',
    buyPrice: 'buyPrice',
    sellPrice: 'sellPrice',
    sellPriceGros: 'sellPriceGros',
    stockQty: 'stockQty',
    stockAlert: 'stockAlert',
    photoUrl: 'photoUrl',
    isActive: 'isActive',
    deletedAt: 'deletedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.StockMovementScalarFieldEnum = {
    id: 'id',
    shopId: 'shopId',
    productId: 'productId',
    type: 'type',
    quantity: 'quantity',
    unitPrice: 'unitPrice',
    referenceType: 'referenceType',
    referenceId: 'referenceId',
    userId: 'userId',
    note: 'note',
    createdAt: 'createdAt'
};
exports.CustomerScalarFieldEnum = {
    id: 'id',
    shopId: 'shopId',
    name: 'name',
    phone: 'phone',
    type: 'type',
    address: 'address',
    isVip: 'isVip',
    totalBought: 'totalBought',
    creditBalance: 'creditBalance',
    deletedAt: 'deletedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.SaleScalarFieldEnum = {
    id: 'id',
    shopId: 'shopId',
    customerId: 'customerId',
    userId: 'userId',
    reference: 'reference',
    totalAmount: 'totalAmount',
    discount: 'discount',
    netAmount: 'netAmount',
    paymentMethod: 'paymentMethod',
    paidAmount: 'paidAmount',
    creditAmount: 'creditAmount',
    notes: 'notes',
    createdAt: 'createdAt'
};
exports.SaleItemScalarFieldEnum = {
    id: 'id',
    saleId: 'saleId',
    productId: 'productId',
    quantity: 'quantity',
    unitPrice: 'unitPrice',
    totalPrice: 'totalPrice'
};
exports.CreditScalarFieldEnum = {
    id: 'id',
    shopId: 'shopId',
    customerId: 'customerId',
    saleId: 'saleId',
    amountTotal: 'amountTotal',
    amountPaid: 'amountPaid',
    amountRemaining: 'amountRemaining',
    dueDate: 'dueDate',
    status: 'status',
    notes: 'notes',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.CreditPaymentScalarFieldEnum = {
    id: 'id',
    creditId: 'creditId',
    amount: 'amount',
    paymentMethod: 'paymentMethod',
    userId: 'userId',
    note: 'note',
    createdAt: 'createdAt'
};
exports.CashRegisterScalarFieldEnum = {
    id: 'id',
    shopId: 'shopId',
    userId: 'userId',
    date: 'date',
    openingAmount: 'openingAmount',
    closingAmount: 'closingAmount',
    theoreticalAmount: 'theoreticalAmount',
    difference: 'difference',
    status: 'status',
    notes: 'notes',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.SupplierScalarFieldEnum = {
    id: 'id',
    shopId: 'shopId',
    name: 'name',
    phone: 'phone',
    address: 'address',
    debtBalance: 'debtBalance',
    deletedAt: 'deletedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.PurchaseScalarFieldEnum = {
    id: 'id',
    shopId: 'shopId',
    supplierId: 'supplierId',
    userId: 'userId',
    reference: 'reference',
    totalAmount: 'totalAmount',
    paidAmount: 'paidAmount',
    paymentMethod: 'paymentMethod',
    deliveryDate: 'deliveryDate',
    notes: 'notes',
    createdAt: 'createdAt'
};
exports.PurchaseItemScalarFieldEnum = {
    id: 'id',
    purchaseId: 'purchaseId',
    productId: 'productId',
    quantity: 'quantity',
    unitPrice: 'unitPrice',
    totalPrice: 'totalPrice'
};
exports.ExpenseScalarFieldEnum = {
    id: 'id',
    shopId: 'shopId',
    userId: 'userId',
    category: 'category',
    amount: 'amount',
    description: 'description',
    date: 'date',
    isRecurring: 'isRecurring',
    recurDay: 'recurDay',
    createdAt: 'createdAt'
};
exports.InvoiceScalarFieldEnum = {
    id: 'id',
    shopId: 'shopId',
    customerId: 'customerId',
    saleId: 'saleId',
    reference: 'reference',
    type: 'type',
    status: 'status',
    amountHt: 'amountHt',
    tvaRate: 'tvaRate',
    amountTtc: 'amountTtc',
    pdfUrl: 'pdfUrl',
    sentAt: 'sentAt',
    notes: 'notes',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.SubscriptionScalarFieldEnum = {
    id: 'id',
    shopId: 'shopId',
    amount: 'amount',
    paymentRef: 'paymentRef',
    startsAt: 'startsAt',
    expiresAt: 'expiresAt',
    createdAt: 'createdAt'
};
exports.SortOrder = {
    asc: 'asc',
    desc: 'desc'
};
exports.QueryMode = {
    default: 'default',
    insensitive: 'insensitive'
};
exports.NullsOrder = {
    first: 'first',
    last: 'last'
};
//# sourceMappingURL=prismaNamespaceBrowser.js.map
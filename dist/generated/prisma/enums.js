"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerType = exports.ExpenseCategory = exports.InvoiceStatus = exports.InvoiceType = exports.StockMovementType = exports.CashRegisterStatus = exports.CreditStatus = exports.PaymentMethod = exports.Plan = exports.UserRole = void 0;
exports.UserRole = {
    owner: 'owner',
    seller: 'seller'
};
exports.Plan = {
    trial: 'trial',
    active: 'active',
    expired: 'expired'
};
exports.PaymentMethod = {
    cash: 'cash',
    wave: 'wave',
    orange_money: 'orange_money',
    credit: 'credit',
    mixed: 'mixed'
};
exports.CreditStatus = {
    open: 'open',
    partial: 'partial',
    paid: 'paid',
    overdue: 'overdue'
};
exports.CashRegisterStatus = {
    open: 'open',
    closed: 'closed'
};
exports.StockMovementType = {
    sale: 'sale',
    purchase: 'purchase',
    adjustment: 'adjustment',
    return: 'return',
    loss: 'loss'
};
exports.InvoiceType = {
    invoice: 'invoice',
    quote: 'quote',
    credit_note: 'credit_note'
};
exports.InvoiceStatus = {
    draft: 'draft',
    sent: 'sent',
    paid: 'paid',
    cancelled: 'cancelled'
};
exports.ExpenseCategory = {
    rent: 'rent',
    electricity: 'electricity',
    water: 'water',
    salary: 'salary',
    transport: 'transport',
    supplier: 'supplier',
    other: 'other'
};
exports.CustomerType = {
    individual: 'individual',
    professional: 'professional',
    btp: 'btp'
};
//# sourceMappingURL=enums.js.map
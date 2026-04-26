"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const throttler_1 = require("@nestjs/throttler");
const core_1 = require("@nestjs/core");
const prisma_module_1 = require("./prisma/prisma.module");
const auth_module_1 = require("./auth/auth.module");
const shops_module_1 = require("./shops/shops.module");
const categories_module_1 = require("./categories/categories.module");
const products_module_1 = require("./products/products.module");
const sales_module_1 = require("./sales/sales.module");
const customers_module_1 = require("./customers/customers.module");
const reports_module_1 = require("./reports/reports.module");
const credits_module_1 = require("./credits/credits.module");
const cash_register_module_1 = require("./cash-register/cash-register.module");
const expenses_module_1 = require("./expenses/expenses.module");
const suppliers_module_1 = require("./suppliers/suppliers.module");
const purchases_module_1 = require("./purchases/purchases.module");
const subscriptions_module_1 = require("./subscriptions/subscriptions.module");
const http_exception_filter_1 = require("./common/filters/http-exception.filter");
const response_interceptor_1 = require("./common/interceptors/response.interceptor");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({ isGlobal: true }),
            throttler_1.ThrottlerModule.forRoot([{ ttl: 60000, limit: 100 }]),
            prisma_module_1.PrismaModule,
            auth_module_1.AuthModule,
            shops_module_1.ShopsModule,
            categories_module_1.CategoriesModule,
            products_module_1.ProductsModule,
            sales_module_1.SalesModule,
            customers_module_1.CustomersModule,
            reports_module_1.ReportsModule,
            credits_module_1.CreditsModule,
            cash_register_module_1.CashRegisterModule,
            expenses_module_1.ExpensesModule,
            suppliers_module_1.SuppliersModule,
            purchases_module_1.PurchasesModule,
            subscriptions_module_1.SubscriptionsModule,
        ],
        providers: [
            { provide: core_1.APP_FILTER, useClass: http_exception_filter_1.AllExceptionsFilter },
            { provide: core_1.APP_INTERCEPTOR, useClass: response_interceptor_1.ResponseInterceptor },
            { provide: core_1.APP_GUARD, useClass: throttler_1.ThrottlerGuard },
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map
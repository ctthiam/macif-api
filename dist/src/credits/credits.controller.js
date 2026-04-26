"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreditsController = void 0;
const common_1 = require("@nestjs/common");
const jwt_auth_guard_1 = require("../auth/guards/jwt-auth.guard");
const shop_decorator_1 = require("../common/decorators/shop.decorator");
const credits_service_1 = require("./credits.service");
const credit_dto_1 = require("./dto/credit.dto");
let CreditsController = class CreditsController {
    constructor(credits) {
        this.credits = credits;
    }
    findAll(user, customerId) {
        return this.credits.findAll(user.shopId, customerId ? parseInt(customerId) : undefined);
    }
    pay(user, id, dto) {
        return this.credits.pay(user.shopId, user.userId, id, dto);
    }
};
exports.CreditsController = CreditsController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, shop_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Query)('customerId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], CreditsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Post)(':id/pay'),
    __param(0, (0, shop_decorator_1.CurrentUser)()),
    __param(1, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number, credit_dto_1.PayCreditDto]),
    __metadata("design:returntype", void 0)
], CreditsController.prototype, "pay", null);
exports.CreditsController = CreditsController = __decorate([
    (0, common_1.Controller)('api/credits'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [credits_service_1.CreditsService])
], CreditsController);
//# sourceMappingURL=credits.controller.js.map
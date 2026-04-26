"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CurrentShop = exports.CurrentUser = void 0;
const common_1 = require("@nestjs/common");
exports.CurrentUser = (0, common_1.createParamDecorator)((data, ctx) => {
    const request = ctx.switchToHttp().getRequest();
    return request.user;
});
exports.CurrentShop = (0, common_1.createParamDecorator)((data, ctx) => {
    const request = ctx.switchToHttp().getRequest();
    return request.user?.shopId;
});
//# sourceMappingURL=shop.decorator.js.map
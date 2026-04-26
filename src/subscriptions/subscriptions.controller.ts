import { Controller, Get, Post, Body, Query, UseGuards, HttpCode, HttpStatus } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { CurrentUser } from '../common/decorators/shop.decorator';
import { SubscriptionsService } from './subscriptions.service';

@Controller('api/subscriptions')
export class SubscriptionsController {
  constructor(private subscriptions: SubscriptionsService) {}

  @Get('status')
  @UseGuards(JwtAuthGuard)
  getStatus(@CurrentUser() user: any) {
    return this.subscriptions.getStatus(user.shopId);
  }

  @Get('history')
  @UseGuards(JwtAuthGuard)
  getHistory(@CurrentUser() user: any) {
    return this.subscriptions.getHistory(user.shopId);
  }

  @Post('initiate')
  @UseGuards(JwtAuthGuard)
  initiate(@CurrentUser() user: any, @Body('returnUrl') returnUrl: string) {
    return this.subscriptions.initiatePayment(user.shopId, user.userId, returnUrl);
  }

  @Post('webhook')
  @HttpCode(HttpStatus.OK)
  webhook(@Body() body: any) {
    return this.subscriptions.handleWebhook(body);
  }
}

import { Controller, Get, Post, Body, UseGuards, Query } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { CurrentUser } from '../common/decorators/shop.decorator';
import { CashRegisterService } from './cash-register.service';
import { OpenCashRegisterDto, CloseCashRegisterDto } from './dto/cash-register.dto';

@Controller('api/cash-register')
@UseGuards(JwtAuthGuard)
export class CashRegisterController {
  constructor(private cashRegister: CashRegisterService) {}

  @Get('today')
  getToday(@CurrentUser() user: any) {
    return this.cashRegister.getToday(user.shopId);
  }

  @Get('history')
  getHistory(@CurrentUser() user: any, @Query('limit') limit?: string) {
    return this.cashRegister.getHistory(user.shopId, limit ? parseInt(limit) : undefined);
  }

  @Post('open')
  open(@CurrentUser() user: any, @Body() dto: OpenCashRegisterDto) {
    return this.cashRegister.open(user.shopId, user.userId, dto);
  }

  @Post('close')
  close(@CurrentUser() user: any, @Body() dto: CloseCashRegisterDto) {
    return this.cashRegister.close(user.shopId, dto);
  }
}

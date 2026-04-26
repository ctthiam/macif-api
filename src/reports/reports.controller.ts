import { Controller, Get, Query, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { CurrentUser } from '../common/decorators/shop.decorator';
import { ReportsService } from './reports.service';

@Controller('api/reports')
@UseGuards(JwtAuthGuard)
export class ReportsController {
  constructor(private reports: ReportsService) {}

  @Get('dashboard')
  getDashboard(@CurrentUser() user: any) {
    return this.reports.getDashboard(user.shopId);
  }

  @Get('daily')
  getDaily(@CurrentUser() user: any, @Query('date') date?: string) {
    return this.reports.getDaily(user.shopId, date);
  }

  @Get('monthly')
  getMonthly(
    @CurrentUser() user: any,
    @Query('year') year?: string,
    @Query('month') month?: string,
  ) {
    return this.reports.getMonthly(
      user.shopId,
      year ? parseInt(year) : undefined,
      month ? parseInt(month) : undefined,
    );
  }

  @Get('stock-value')
  getStockValue(@CurrentUser() user: any) {
    return this.reports.getStockValue(user.shopId);
  }
}

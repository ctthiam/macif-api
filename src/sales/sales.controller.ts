import { Controller, Get, Post, Body, Param, Query, UseGuards, ParseIntPipe } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { CurrentUser } from '../common/decorators/shop.decorator';
import { SalesService } from './sales.service';
import { CreateSaleDto } from './dto/sale.dto';

@Controller('api/sales')
@UseGuards(JwtAuthGuard)
export class SalesController {
  constructor(private sales: SalesService) {}

  @Post()
  create(@CurrentUser() user: any, @Body() dto: CreateSaleDto) {
    return this.sales.create(user.shopId, user.id, dto);
  }

  @Get()
  findAll(
    @CurrentUser() user: any,
    @Query('startDate') startDate?: string,
    @Query('endDate') endDate?: string,
    @Query('paymentMethod') paymentMethod?: string,
    @Query('userId') userId?: string,
    @Query('limit') limit?: string,
    @Query('page') page?: string,
  ) {
    return this.sales.findAll(user.shopId, {
      startDate,
      endDate,
      paymentMethod,
      userId: userId ? parseInt(userId) : undefined,
      limit: limit ? parseInt(limit) : undefined,
      page: page ? parseInt(page) : undefined,
    });
  }

  @Get('summary')
  getSummary(
    @CurrentUser() user: any,
    @Query('period') period: 'today' | 'week' | 'month' = 'today',
  ) {
    return this.sales.getSummary(user.shopId, period);
  }

  @Get(':id')
  findOne(@CurrentUser() user: any, @Param('id', ParseIntPipe) id: number) {
    return this.sales.findOne(user.shopId, id);
  }
}

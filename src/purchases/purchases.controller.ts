import { Controller, Get, Post, Body, Param, Query, UseGuards, ParseIntPipe } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { CurrentUser } from '../common/decorators/shop.decorator';
import { PurchasesService } from './purchases.service';
import { CreatePurchaseDto } from './dto/purchase.dto';

@Controller('api/purchases')
@UseGuards(JwtAuthGuard)
export class PurchasesController {
  constructor(private purchases: PurchasesService) {}

  @Get()
  findAll(
    @CurrentUser() user: any,
    @Query('supplierId') supplierId?: string,
    @Query('page') page?: string,
    @Query('limit') limit?: string,
  ) {
    return this.purchases.findAll(user.shopId, {
      supplierId: supplierId ? parseInt(supplierId) : undefined,
      page: page ? parseInt(page) : undefined,
      limit: limit ? parseInt(limit) : undefined,
    });
  }

  @Get(':id')
  findOne(@CurrentUser() user: any, @Param('id', ParseIntPipe) id: number) {
    return this.purchases.findOne(user.shopId, id);
  }

  @Post()
  create(@CurrentUser() user: any, @Body() dto: CreatePurchaseDto) {
    return this.purchases.create(user.shopId, user.userId, dto);
  }
}

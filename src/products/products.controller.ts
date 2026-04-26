import {
  Controller, Get, Post, Put, Delete, Body, Param, Query,
  UseGuards, ParseIntPipe,
} from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { CurrentUser } from '../common/decorators/shop.decorator';
import { ProductsService } from './products.service';
import { CreateProductDto, UpdateProductDto, AdjustStockDto } from './dto/product.dto';

@Controller('api/products')
@UseGuards(JwtAuthGuard)
export class ProductsController {
  constructor(private products: ProductsService) {}

  @Get()
  findAll(
    @CurrentUser() user: any,
    @Query('categoryId') categoryId?: string,
    @Query('lowStock') lowStock?: string,
    @Query('search') search?: string,
    @Query('limit') limit?: string,
  ) {
    return this.products.findAll(user.shopId, {
      categoryId: categoryId ? parseInt(categoryId) : undefined,
      lowStock: lowStock === 'true',
      search,
      limit: limit ? parseInt(limit) : undefined,
    });
  }

  @Get('low-stock')
  findLowStock(@CurrentUser() user: any) {
    return this.products.findLowStock(user.shopId);
  }

  @Get(':id')
  findOne(@CurrentUser() user: any, @Param('id', ParseIntPipe) id: number) {
    return this.products.findOne(user.shopId, id);
  }

  @Post()
  create(@CurrentUser() user: any, @Body() dto: CreateProductDto) {
    return this.products.create(user.shopId, user.id, dto);
  }

  @Put(':id')
  update(
    @CurrentUser() user: any,
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateProductDto,
  ) {
    return this.products.update(user.shopId, id, dto);
  }

  @Delete(':id')
  softDelete(@CurrentUser() user: any, @Param('id', ParseIntPipe) id: number) {
    return this.products.softDelete(user.shopId, id);
  }

  @Post(':id/adjust-stock')
  adjustStock(
    @CurrentUser() user: any,
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: AdjustStockDto,
  ) {
    return this.products.adjustStock(user.shopId, id, user.id, dto);
  }
}

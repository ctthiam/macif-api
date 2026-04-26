import { Controller, Get, Post, Patch, Delete, Body, Param, Query, UseGuards, ParseIntPipe } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { CurrentUser } from '../common/decorators/shop.decorator';
import { SuppliersService } from './suppliers.service';
import { CreateSupplierDto, UpdateSupplierDto } from './dto/supplier.dto';

@Controller('api/suppliers')
@UseGuards(JwtAuthGuard)
export class SuppliersController {
  constructor(private suppliers: SuppliersService) {}

  @Get()
  findAll(@CurrentUser() user: any, @Query('search') search?: string) {
    return this.suppliers.findAll(user.shopId, search);
  }

  @Get(':id')
  findOne(@CurrentUser() user: any, @Param('id', ParseIntPipe) id: number) {
    return this.suppliers.findOne(user.shopId, id);
  }

  @Post()
  create(@CurrentUser() user: any, @Body() dto: CreateSupplierDto) {
    return this.suppliers.create(user.shopId, dto);
  }

  @Patch(':id')
  update(@CurrentUser() user: any, @Param('id', ParseIntPipe) id: number, @Body() dto: UpdateSupplierDto) {
    return this.suppliers.update(user.shopId, id, dto);
  }

  @Delete(':id')
  remove(@CurrentUser() user: any, @Param('id', ParseIntPipe) id: number) {
    return this.suppliers.softDelete(user.shopId, id);
  }
}

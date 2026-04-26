import { Controller, Get, Post, Put, Delete, Body, Param, Query, UseGuards, ParseIntPipe } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { CurrentUser } from '../common/decorators/shop.decorator';
import { CustomersService } from './customers.service';
import { CreateCustomerDto, UpdateCustomerDto } from './dto/customer.dto';

@Controller('api/customers')
@UseGuards(JwtAuthGuard)
export class CustomersController {
  constructor(private customers: CustomersService) {}

  @Get()
  findAll(@CurrentUser() user: any, @Query('search') search?: string) {
    return this.customers.findAll(user.shopId, search);
  }

  @Get(':id')
  findOne(@CurrentUser() user: any, @Param('id', ParseIntPipe) id: number) {
    return this.customers.findOne(user.shopId, id);
  }

  @Post()
  create(@CurrentUser() user: any, @Body() dto: CreateCustomerDto) {
    return this.customers.create(user.shopId, dto);
  }

  @Put(':id')
  update(
    @CurrentUser() user: any,
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateCustomerDto,
  ) {
    return this.customers.update(user.shopId, id, dto);
  }

  @Delete(':id')
  remove(@CurrentUser() user: any, @Param('id', ParseIntPipe) id: number) {
    return this.customers.softDelete(user.shopId, id);
  }
}

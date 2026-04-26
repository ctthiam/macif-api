import { Controller, Get, Post, Put, Delete, Body, Param, UseGuards, ParseIntPipe } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { CurrentUser } from '../common/decorators/shop.decorator';
import { CategoriesService, CategoryDto } from './categories.service';

@Controller('api/categories')
@UseGuards(JwtAuthGuard)
export class CategoriesController {
  constructor(private categories: CategoriesService) {}

  @Get()
  findAll(@CurrentUser() user: any) {
    return this.categories.findAll(user.shopId);
  }

  @Post()
  create(@CurrentUser() user: any, @Body() dto: CategoryDto) {
    return this.categories.create(user.shopId, dto);
  }

  @Put(':id')
  update(
    @CurrentUser() user: any,
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: CategoryDto,
  ) {
    return this.categories.update(user.shopId, id, dto);
  }

  @Delete(':id')
  remove(@CurrentUser() user: any, @Param('id', ParseIntPipe) id: number) {
    return this.categories.remove(user.shopId, id);
  }
}

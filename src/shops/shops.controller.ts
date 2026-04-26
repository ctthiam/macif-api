import { Controller, Get, Put, Body, UseGuards, Delete, Param, ParseIntPipe } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { CurrentUser } from '../common/decorators/shop.decorator';
import { ShopsService } from './shops.service';
import { UpdateShopDto } from './dto/shop.dto';

@Controller('api/shops')
@UseGuards(JwtAuthGuard)
export class ShopsController {
  constructor(private shops: ShopsService) {}

  @Get('mine')
  getMyShop(@CurrentUser() user: any) {
    return this.shops.getMyShop(user.shopId);
  }

  @Put(':id')
  updateShop(
    @Param('id', ParseIntPipe) id: number,
    @CurrentUser() user: any,
    @Body() dto: UpdateShopDto,
  ) {
    return this.shops.updateShop(id, user.id, dto);
  }

  @Get(':id/team')
  @UseGuards(JwtAuthGuard)
  getTeam(@Param('id', ParseIntPipe) id: number) {
    return this.shops.getTeam(id);
  }

  @Delete(':id/team/:memberId')
  @UseGuards(JwtAuthGuard)
  deactivateMember(
    @Param('id', ParseIntPipe) id: number,
    @Param('memberId', ParseIntPipe) memberId: number,
    @CurrentUser() user: any,
  ) {
    return this.shops.deactivateTeamMember(id, user.id, memberId);
  }
}

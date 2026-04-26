import { Controller, Get, Post, Body, Param, Query, UseGuards, ParseIntPipe } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { CurrentUser } from '../common/decorators/shop.decorator';
import { CreditsService } from './credits.service';
import { PayCreditDto } from './dto/credit.dto';

@Controller('api/credits')
@UseGuards(JwtAuthGuard)
export class CreditsController {
  constructor(private credits: CreditsService) {}

  @Get()
  findAll(@CurrentUser() user: any, @Query('customerId') customerId?: string) {
    return this.credits.findAll(
      user.shopId,
      customerId ? parseInt(customerId) : undefined,
    );
  }

  @Post(':id/pay')
  pay(
    @CurrentUser() user: any,
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: PayCreditDto,
  ) {
    return this.credits.pay(user.shopId, user.userId, id, dto);
  }
}

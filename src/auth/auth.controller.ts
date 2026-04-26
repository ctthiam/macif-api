import {
  Controller,
  Post,
  Get,
  Body,
  Res,
  Req,
  UseGuards,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { Response, Request } from 'express';
import { Throttle } from '@nestjs/throttler';
import { AuthService } from './auth.service';
import { RegisterDto, LoginDto, SetPinDto, VerifyPinDto, ChangePasswordDto } from './dto/auth.dto';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { CurrentUser } from '../common/decorators/shop.decorator';

const COOKIE_OPTS = {
  httpOnly: true,
  secure: process.env.NODE_ENV === 'production',
  sameSite: 'lax' as const,
  path: '/',
};

@Controller('api/auth')
export class AuthController {
  constructor(private auth: AuthService) {}

  @Throttle({ default: { limit: 5, ttl: 60000 } })
  @Post('register')
  async register(@Body() dto: RegisterDto, @Req() req: Request, @Res() res: Response) {
    const ip = req.ip ?? '';
    const result = await this.auth.register(dto, ip);
    this.setTokenCookies(res, result.tokens);
    return res.json({
      success: true,
      data: { user: result.user, shop: result.shop },
      message: 'Compte créé avec succès',
    });
  }

  @Throttle({ default: { limit: 5, ttl: 60000 } })
  @Post('login')
  @HttpCode(HttpStatus.OK)
  async login(@Body() dto: LoginDto, @Req() req: Request, @Res() res: Response) {
    const ip = req.ip ?? '';
    const result = await this.auth.login(dto, ip);
    this.setTokenCookies(res, result.tokens);
    return res.json({
      success: true,
      data: { user: result.user, shop: result.shop, hasPin: result.hasPin },
      message: 'Connexion réussie',
    });
  }

  @UseGuards(JwtAuthGuard)
  @Post('pin/set')
  async setPin(@CurrentUser() user: any, @Body() dto: SetPinDto) {
    return this.auth.setPin(user.id, dto);
  }

  @UseGuards(JwtAuthGuard)
  @Post('pin/verify')
  @HttpCode(HttpStatus.OK)
  async verifyPin(@CurrentUser() user: any, @Body() dto: VerifyPinDto) {
    return this.auth.verifyPin(user.id, dto);
  }

  @Post('refresh')
  @HttpCode(HttpStatus.OK)
  async refresh(@Req() req: Request, @Res() res: Response) {
    const token = req.cookies?.['refresh_token'];
    const tokens = await this.auth.refresh(token);
    this.setTokenCookies(res, tokens);
    return res.json({ success: true, data: null, message: 'Token rafraîchi' });
  }

  @UseGuards(JwtAuthGuard)
  @Post('logout')
  @HttpCode(HttpStatus.OK)
  async logout(@CurrentUser() user: any, @Res() res: Response) {
    await this.auth.logout(user.id);
    res.clearCookie('access_token', COOKIE_OPTS);
    res.clearCookie('refresh_token', COOKIE_OPTS);
    return res.json({ success: true, data: null, message: 'Déconnexion réussie' });
  }

  @UseGuards(JwtAuthGuard)
  @Post('change-password')
  @HttpCode(HttpStatus.OK)
  async changePassword(@CurrentUser() user: any, @Body() dto: ChangePasswordDto) {
    return this.auth.changePassword(user.id, dto.currentPassword, dto.newPassword);
  }

  @UseGuards(JwtAuthGuard)
  @Get('me')
  async me(@CurrentUser() user: any) {
    return this.auth.getMe(user.id);
  }

  private setTokenCookies(res: Response, tokens: { accessToken: string; refreshToken: string }) {
    res.cookie('access_token', tokens.accessToken, { ...COOKIE_OPTS, maxAge: 15 * 60 * 1000 });
    res.cookie('refresh_token', tokens.refreshToken, {
      ...COOKIE_OPTS,
      maxAge: 30 * 24 * 60 * 60 * 1000,
    });
  }
}

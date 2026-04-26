import { IsString, IsOptional, IsEmail, MinLength, Matches } from 'class-validator';

export class RegisterDto {
  @IsString()
  name: string;

  @IsString()
  @Matches(/^(\+221|221)?[0-9]{9}$/, { message: 'Numéro de téléphone invalide' })
  phone: string;

  @IsOptional()
  @IsEmail()
  email?: string;

  @IsString()
  @MinLength(6, { message: 'Le mot de passe doit contenir au moins 6 caractères' })
  password: string;

  @IsString()
  shopName: string;
}

export class LoginDto {
  @IsString()
  phone: string;

  @IsString()
  password: string;
}

export class SetPinDto {
  @IsString()
  @Matches(/^\d{4}$/, { message: 'Le PIN doit être composé de 4 chiffres' })
  pin: string;
}

export class VerifyPinDto {
  @IsString()
  @Matches(/^\d{4}$/, { message: 'Le PIN doit être composé de 4 chiffres' })
  pin: string;
}

export class ChangePasswordDto {
  @IsString()
  currentPassword: string;

  @IsString()
  @MinLength(6, { message: 'Le mot de passe doit contenir au moins 6 caractères' })
  newPassword: string;
}

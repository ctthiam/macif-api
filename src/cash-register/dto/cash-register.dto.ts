import { IsNumber, IsPositive, IsOptional, IsString, Min } from 'class-validator';

export class OpenCashRegisterDto {
  @IsNumber()
  @Min(0)
  openingAmount: number;

  @IsOptional()
  @IsString()
  notes?: string;
}

export class CloseCashRegisterDto {
  @IsNumber()
  @Min(0)
  closingAmount: number;

  @IsOptional()
  @IsString()
  notes?: string;
}

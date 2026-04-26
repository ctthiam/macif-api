import { IsNumber, IsPositive, IsString, IsOptional, IsIn } from 'class-validator';

export class PayCreditDto {
  @IsNumber()
  @IsPositive()
  amount: number;

  @IsOptional()
  @IsString()
  @IsIn(['cash', 'wave', 'orange_money'])
  paymentMethod?: string;

  @IsOptional()
  @IsString()
  note?: string;
}

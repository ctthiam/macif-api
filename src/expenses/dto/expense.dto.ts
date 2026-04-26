import { IsNumber, IsPositive, IsString, IsOptional, IsIn, IsBoolean, IsInt, Min, Max } from 'class-validator';

const CATEGORIES = ['rent', 'electricity', 'water', 'salary', 'transport', 'supplier', 'other'] as const;

export class CreateExpenseDto {
  @IsString()
  @IsIn(CATEGORIES)
  category: string;

  @IsNumber()
  @IsPositive()
  amount: number;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsString()
  date?: string; // YYYY-MM-DD, defaults to today

  @IsOptional()
  @IsBoolean()
  isRecurring?: boolean;

  @IsOptional()
  @IsInt()
  @Min(1)
  @Max(31)
  recurDay?: number;
}

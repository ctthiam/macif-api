import { IsString, IsOptional, IsNumber, IsPositive, Min, IsBoolean } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateProductDto {
  @IsString()
  name: string;

  @IsOptional()
  @IsNumber()
  categoryId?: number;

  @IsOptional()
  @IsString()
  reference?: string;

  @IsOptional()
  @IsString()
  unit?: string;

  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  @Min(0)
  buyPrice?: number;

  @Type(() => Number)
  @IsNumber()
  @IsPositive()
  sellPrice: number;

  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  @Min(0)
  sellPriceGros?: number;

  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  @Min(0)
  stockQty?: number;

  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  @Min(0)
  stockAlert?: number;
}

export class UpdateProductDto extends CreateProductDto {}

export class AdjustStockDto {
  @Type(() => Number)
  @IsNumber()
  quantity: number;

  @IsOptional()
  @IsString()
  note?: string;
}

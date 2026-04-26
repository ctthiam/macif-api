import { IsNumber, IsPositive, IsOptional, IsString, IsIn, IsArray, ValidateNested, IsInt, Min } from 'class-validator';
import { Type } from 'class-transformer';

export class PurchaseItemDto {
  @IsInt()
  @IsPositive()
  productId: number;

  @IsNumber()
  @IsPositive()
  quantity: number;

  @IsNumber()
  @Min(0)
  unitPrice: number;
}

export class CreatePurchaseDto {
  @IsOptional()
  @IsInt()
  supplierId?: number;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => PurchaseItemDto)
  items: PurchaseItemDto[];

  @IsNumber()
  @Min(0)
  paidAmount: number;

  @IsString()
  @IsIn(['cash', 'wave', 'orange_money', 'credit'])
  paymentMethod: string;

  @IsOptional()
  @IsString()
  deliveryDate?: string;

  @IsOptional()
  @IsString()
  notes?: string;
}

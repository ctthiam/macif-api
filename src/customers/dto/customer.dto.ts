import { IsString, IsOptional, IsEnum } from 'class-validator';

export class CreateCustomerDto {
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  phone?: string;

  @IsOptional()
  @IsEnum(['individual', 'professional', 'btp'])
  type?: string;

  @IsOptional()
  @IsString()
  address?: string;
}

export class UpdateCustomerDto extends CreateCustomerDto {}

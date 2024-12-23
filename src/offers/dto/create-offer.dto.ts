import { IsArray, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateOfferDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsNotEmpty()
  @IsString()
  slayer: string;

  @IsArray()
  @IsString({ each: true })
  competences: string[];



  @IsOptional()
  @IsString()
  creator?: string;
}

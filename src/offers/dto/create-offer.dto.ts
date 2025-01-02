import { IsArray, IsEmail, IsMongoId, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateOfferDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsNotEmpty()
  @IsNumber()
  salary: number;

  @IsArray()
  @IsString({ each: true })
  competences: string[];

  @IsNotEmpty()
  @IsString()
  contract: string;

  @IsNotEmpty()
  @IsString()
  localisation: string;

  @IsNotEmpty()
  @IsString()
  companyName: string;

  @IsOptional()
  @IsEmail()
  contactEmail?: string;

  @IsOptional()
  @IsString()
  contactPhone?: string;

  @IsNotEmpty()
  @IsString()
  @IsMongoId()
  RH: string



}

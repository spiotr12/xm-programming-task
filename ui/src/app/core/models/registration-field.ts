import 'reflect-metadata';
import { FieldValidation } from './field-validation';
import { IsArray, IsBoolean, IsEnum, IsNotEmpty, IsString, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

export enum FieldType {
  text = 'text',
  email = 'email',
  phone = 'phone',
  password = 'password'
}

export class RegistrationField {

  @IsEnum(FieldType)
  @IsNotEmpty()
  // @ts-expect-error
  public type: FieldType;

  @IsString()
  @IsNotEmpty()
  // @ts-expect-error
  public name: string;

  @IsString()
  @IsNotEmpty()
  // @ts-expect-error
  public label: string;

  @IsBoolean()
  @IsNotEmpty()
  // @ts-expect-error
  public required: boolean;

  @ValidateNested({ each: true })
  @IsArray()
  @Type(() => FieldValidation)
  public validations?: FieldValidation[];
}

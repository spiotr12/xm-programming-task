import 'reflect-metadata';
import { IsNotEmpty, IsString } from 'class-validator';

export class FieldValidation {

  @IsString()
  @IsNotEmpty()
  // @ts-expect-error
  public name: string;

  @IsString()
  @IsNotEmpty()
  // @ts-expect-error
  public message: string;

  @IsNotEmpty()
  // @ts-expect-error
  public value: string | number;
}


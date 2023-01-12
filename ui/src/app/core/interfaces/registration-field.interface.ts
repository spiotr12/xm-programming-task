import { IFieldValidation } from './field-validation.interface';

export type FieldType = 'text' | 'email' | 'phone' | 'password'

export interface IRegistrationField {
  type: FieldType;
  name: string;
  label: string;
  required: boolean;
  validations?: IFieldValidation[];
}

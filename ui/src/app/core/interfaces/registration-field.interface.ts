import { FieldValidation } from './field-validation.interface';

export type FieldType = 'text' | 'email' | 'phone' | 'password'

export interface RegistrationField {
  type: FieldType;
  name: string;
  label: string;
  required: boolean;
  validations?: FieldValidation[];
}

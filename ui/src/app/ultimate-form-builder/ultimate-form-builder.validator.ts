import { AbstractControl, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { FieldValidation } from '../core/models';

export function ultimateFormBuilderValidator(fieldValidation: FieldValidation): ValidatorFn {

  const responseBuilder = (result: ValidationErrors | null) => result
    ? ({ customError: { ...result, message: fieldValidation.message } })
    : null;

  return (control: AbstractControl) => {
    if (fieldValidation.name === 'maxlength') {
      return responseBuilder(Validators.maxLength(+fieldValidation.value)(control));
    }

    if (fieldValidation.name === 'minlength') {
      return responseBuilder(Validators.minLength(+fieldValidation.value)(control));
    }

    if (fieldValidation.name === 'regex') {
      return responseBuilder(Validators.pattern(fieldValidation.value.toString())(control));
    }

    return null;
  };
}

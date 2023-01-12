import { FieldValidation } from 'src/app/core/interfaces';
import { AbstractControl, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

export function ultimateFormBuilderValidator(fieldValidation: FieldValidation): ValidatorFn {
  return (control: AbstractControl) => {
    let result: ValidationErrors | null = null;

    if (fieldValidation.name === 'maxlength') {
      result = Validators.maxLength(+fieldValidation.value)(control);
    }

    if (fieldValidation.name === 'minlength') {
      result = Validators.minLength(+fieldValidation.value)(control);
    }

    if (fieldValidation.name === 'regex') {
      result = Validators.pattern(fieldValidation.value.toString())(control);
    }

    if (result) {
      return { customError: { ...result, message: fieldValidation.message } };
    }
    return result;
  };
}

import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { RegistrationField } from 'src/app/core/interfaces';
import { FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { ultimateFormBuilderValidator } from './ultimate-form-builder.validator';

@Component({
  selector: 'xm-ultimate-form-builder',
  templateUrl: './ultimate-form-builder.component.html',
  styleUrls: ['./ultimate-form-builder.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UltimateFormBuilderComponent {

  @Input()
  public set config(value: RegistrationField[] | null) {
    this._config = value;
    this._form = this.buildReactiveFormFromConfig();
  }

  public get config(): RegistrationField[] | null {
    return this._config;
  }

  private _config: RegistrationField[] | null = null;

  public get form(): FormGroup {
    return this._form;
  }

  private _form: FormGroup = new FormGroup({});

  @Input()
  public submitBtnLabel: string = 'Submit';

  @Output()
  public readonly submit = new EventEmitter<object>;

  public parseSubmit() {
    this.submit.emit(this.form.value);
  }

  public toggleShowPassword(passwordField: HTMLInputElement) {
    passwordField.type = passwordField.type === 'password' ? 'text' : 'password';
  }

  private buildReactiveFormFromConfig(config = this.config): FormGroup {
    const fb = new FormGroup({});
    if (!config) {
      return fb;
    }

    for (const field of config) {
      const control = new FormControl();
      control.addValidators(this.buildValidators(field));
      fb.addControl(field.name, control);
    }

    return fb;
  }

  private buildValidators(field: RegistrationField): ValidatorFn[] {
    const validators: ValidatorFn[] = [];

    for (const fieldValidation of field.validations || []) {
      validators.push(ultimateFormBuilderValidator(fieldValidation));
    }

    if (field.required) {
      validators.push(Validators.required);
    }

    return validators;
  }
}

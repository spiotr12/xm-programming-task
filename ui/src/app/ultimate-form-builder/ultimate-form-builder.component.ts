import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { RegistrationField } from 'src/app/core/interfaces';
import { FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'xm-ultimate-form-builder',
  templateUrl: './ultimate-form-builder.component.html',
  styleUrls: ['./ultimate-form-builder.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UltimateFormBuilderComponent {

  @Input()
  public set config(value: RegistrationField[] | null) {
    console.log(value);
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
  public submitBtnLabel: string = 'Submit'

  private buildReactiveFormFromConfig(config = this.config): FormGroup {
    const fb = new FormGroup({});
    if (!config) {
      return fb;
    }

    for (const field of config) {
      const control = new FormControl();

      const validators: ValidatorFn[] = [];

      if (field.required) {
        validators.push(Validators.required)
      }

      control.addValidators(validators)

      fb.addControl(field.name, control)
    }

    return fb;
  }

  public submit() {

  }
}

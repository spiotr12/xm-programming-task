import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { FormFieldComponent } from '../form-field';

@Component({
  selector: 'xm-password-field',
  templateUrl: './password-field.component.html',
  styleUrls: ['./password-field.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: PasswordFieldComponent,
    },
  ],
})
export class PasswordFieldComponent extends FormFieldComponent implements ControlValueAccessor {

  constructor(private readonly cdRef: ChangeDetectorRef) {
    super();
  }

  public show = false;

  public toggle() {
    this.show = !this.show;
    this.cdRef.markForCheck();
  }
}

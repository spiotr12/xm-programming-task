import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { coerceBooleanProperty } from '@angular/cdk/coercion';

@Component({
  selector: 'xm-form-field',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: FormFieldComponent,
    },
  ],
})
export class FormFieldComponent implements ControlValueAccessor {
  @Input()
  public label: string = '';

  @Input()
  public type: string = '';

  @Input()
  public set required(value) {
    this._required = coerceBooleanProperty(value);
  }

  public get required(): boolean {
    return this._required;
  }

  private _required: boolean = false;

  @Input()
  public errorMessage?: string;

  public touched = false;

  public disabled = false;

  public value: string = '';

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  writeValue(obj: any): void {
    this.value = obj;
  }

  public onChange = (_: any) => {};
  public onTouched = () => {};

  public markAsTouched() {
    if (!this.touched) {
      this.onTouched();
      this.touched = true;
    }
  }

  public keyUp(event: KeyboardEvent) {
    event.stopPropagation();
    this.markAsTouched();
    this.value = (event.target as HTMLInputElement).value;
    this.onChange(this.value);
  }
}

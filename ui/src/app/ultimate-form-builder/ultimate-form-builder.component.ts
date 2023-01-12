import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { RegistrationField } from 'src/app/core/interfaces';

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
  }
}

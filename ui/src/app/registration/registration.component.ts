import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormConfigService } from 'src/app/core/services';
import { FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import { RegistrationField } from 'src/app/core/interfaces';

@Component({
  selector: 'xm-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegistrationComponent {
  public readonly config$: Observable<RegistrationField[]>;

  constructor(private readonly formConfigService: FormConfigService,
              private fb: FormBuilder) {
    this.config$ = this.formConfigService.getRegistrationFormConfig();
  }
}

import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormConfigService } from 'src/app/core/services';

@Component({
  selector: 'xm-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegistrationComponent {
  constructor(private readonly formConfigService: FormConfigService) {
    this.formConfigService.getRegistrationFormConfig().subscribe(value => console.log(value));
  }
}

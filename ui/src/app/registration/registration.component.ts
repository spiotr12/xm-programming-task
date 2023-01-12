import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormConfigService, RegistrationService } from '../core/services';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { RegistrationField } from '../core/models';

@Component({
  selector: 'xm-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegistrationComponent {
  public readonly config$: Observable<RegistrationField[]>;

  constructor(private readonly formConfigService: FormConfigService,
              private readonly registrationService: RegistrationService,
              private readonly router: Router) {
    this.config$ = this.formConfigService.getRegistrationFormConfig();
  }

  public register(event: object) {
    this.registrationService.createNewUser(event as any).subscribe({
      next: () => this.router.navigate(['/welcome']),
      error: err => console.error(err),
    });
  }
}

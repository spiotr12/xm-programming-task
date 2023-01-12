import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'xm-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WelcomeComponent {

}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PasswordFieldComponent } from './password-field.component';


@NgModule({
  declarations: [
    PasswordFieldComponent,
  ],
  exports: [
    PasswordFieldComponent,
  ],
  imports: [
    CommonModule,
  ],
})
export class PasswordFieldModule {}

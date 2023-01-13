import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { UltimateFormBuilderComponent } from './ultimate-form-builder.component';
import { InputTypePipe } from './input-type.pipe';
import { FormFieldModule } from '../form-field';
import { PasswordFieldModule } from '../password-field';

@NgModule({
  declarations: [
    UltimateFormBuilderComponent,
    InputTypePipe,
  ],
  exports: [
    UltimateFormBuilderComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormFieldModule,
    PasswordFieldModule,
  ],
})
export class UltimateFormBuilderModule {}

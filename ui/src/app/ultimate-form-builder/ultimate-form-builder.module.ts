import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { UltimateFormBuilderComponent } from './ultimate-form-builder.component';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldDefaultOptions, MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { InputTypePipe } from './input-type.pipe';
import { MatIconModule } from '@angular/material/icon';


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
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
  ],
  providers: [
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'outline' } as MatFormFieldDefaultOptions },
  ],
})
export class UltimateFormBuilderModule {}

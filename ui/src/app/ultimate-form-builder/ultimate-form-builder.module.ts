import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { UltimateFormBuilderComponent } from './ultimate-form-builder.component';


@NgModule({
  declarations: [
    UltimateFormBuilderComponent,
  ],
  exports: [
    UltimateFormBuilderComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
})
export class UltimateFormBuilderModule {}

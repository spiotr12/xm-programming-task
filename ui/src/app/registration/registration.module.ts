import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistrationRoutingModule } from 'src/app/registration/registration-routing.module';
import { RegistrationComponent } from 'src/app/registration/registration.component';
import { UltimateFormBuilderModule } from 'src/app/ultimate-form-builder';


@NgModule({
  declarations: [
    RegistrationComponent
  ],
    imports: [
        CommonModule,
        RegistrationRoutingModule,
        UltimateFormBuilderModule,
    ],
})
export class RegistrationModule { }

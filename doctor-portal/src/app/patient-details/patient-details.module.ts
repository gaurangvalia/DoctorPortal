import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatientDetailsRoutingModule } from './patient-details-routing.module';
import { PatientDetailsComponent } from './patient-details.component';
import { PatientAddComponent } from './patient-add/patient-add.component';
import { PatientListComponent } from './patient-list/patient-list.component';


@NgModule({
  declarations: [PatientDetailsComponent, PatientAddComponent, PatientListComponent],
  imports: [
    CommonModule,
    PatientDetailsRoutingModule
  ]
})
export class PatientDetailsModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatientDetailsRoutingModule } from './patient-details-routing.module';
import { PatientDetailsComponent } from './patient-details.component';
import { PatientAddComponent } from './patient-add/patient-add.component';
import { PatientListComponent } from './patient-list/patient-list.component';
import { RouterModule } from '@angular/router';
import { PatientService } from './patient.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [PatientDetailsComponent, PatientAddComponent, PatientListComponent],
  imports: [
    CommonModule,
    PatientDetailsRoutingModule,
    RouterModule,
    HttpClientModule
  ],
  providers:[
    PatientService
  ]
})
export class PatientDetailsModule { }

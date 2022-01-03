import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Patient } from '../patient.model';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements OnInit {

   /** patients list */
   public patientsList: Patient[];

  constructor(
    private patientService:PatientService
  ) { 
    
  }

  ngOnInit(): void {
    // Call the servie and get the date of patient Details
    
    this.patientService.getPatientDetails().subscribe((response:Patient[])=>{
      this.patientsList = response
    });
  }

 
}

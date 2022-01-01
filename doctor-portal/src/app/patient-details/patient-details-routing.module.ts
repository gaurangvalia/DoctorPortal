import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PatientAddComponent } from './patient-add/patient-add.component';

import { PatientDetailsComponent } from './patient-details.component';
import { PatientListComponent } from './patient-list/patient-list.component';

const routes: Routes = [
	{ 
		path: '',
		component: PatientDetailsComponent,
    children:[
      {
        path:'',
        redirectTo:'list',
        pathMatch:"full"
      },
      {
        path:"add",
        component:PatientAddComponent
      },
      {
        path:"list",
        component:PatientListComponent
      }
    ]
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class PatientDetailsRoutingModule { }

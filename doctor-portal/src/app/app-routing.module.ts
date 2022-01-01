import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashbordComponent } from './core/component/dashbord/dashbord.component';
import { NotFoundComponent } from './core/component/not-found/not-found.component';

const routes: Routes = [
  {
    path:'',
    pathMatch:"full",
    redirectTo:'dashbord'
  },
  {
    path:'dashbord',
    component:DashbordComponent
  },
  { path: 'patient-details', loadChildren: () => import('./patient-details/patient-details.module').then(m => m.PatientDetailsModule) },
  {
    path:'**',
    component:NotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

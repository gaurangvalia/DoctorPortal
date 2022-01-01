import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './component/login/login.component';
import { SignupComponent } from './component/signup/signup.component';
import { LogoutComponent } from './component/logout/logout.component';
import { DashbordComponent } from './component/dashbord/dashbord.component';
import { NotFoundComponent } from './component/not-found/not-found.component';



@NgModule({
	declarations: [
		LoginComponent,
		SignupComponent,
		LogoutComponent, 
		DashbordComponent, NotFoundComponent
  ],
	imports: [
		CommonModule
	],
  exports:[
    LoginComponent,
		SignupComponent,
		LogoutComponent, 
		DashbordComponent,
		NotFoundComponent
  ]
})
export class CoreModule { }

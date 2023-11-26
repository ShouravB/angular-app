import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SignupComponent } from './components/signup/signup.component';
import { ShowDoctorComponent } from './components/show-doctor/show-doctor.component';

const routes: Routes = [
  {
    path : '',
    component: LoginComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path : 'dashboard',
    component: DashboardComponent
  },
  {
    path : 'signup',
    component : SignupComponent
  },
  {
    path: 'doctor',
    component : ShowDoctorComponent
  },
  {
    path: '**',
    component : ErrorPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

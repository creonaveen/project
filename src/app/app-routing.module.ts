import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { StudentdetailsComponent } from './studentdetails/studentdetails.component';
import { TeacherdetailsComponent } from './teacherdetails/teacherdetails.component';
import { AuthguardGuard } from './authguard.guard';

const routes: Routes = [
  {path:"login",component:LoginPageComponent},
  {path:"student",component:StudentdetailsComponent,canActivate:[AuthguardGuard]},
  {path:"teacher",component:TeacherdetailsComponent,canActivate:[AuthguardGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { StudentdetailsComponent } from './studentdetails/studentdetails.component';
import { TeacherdetailsComponent } from './teacherdetails/teacherdetails.component';
import { AuthguardGuard } from './authguard.guard';
import { AppComponent } from './app.component';

const routes: Routes = [
  {path:"",component:AppComponent,
  canActivate:[AuthguardGuard],
  children:[
    {path:"student",component:StudentdetailsComponent},
    {path:"teacher",component:TeacherdetailsComponent},
  ]},
    {path:"login",component:LoginPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

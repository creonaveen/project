import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  constructor(private heroservice:HeroService){
    this.heroservice.login_details;
  }
  login=new FormGroup ({ phone:new FormControl('',[Validators.required,Validators.minLength(10)]),
  pass:new FormControl('',[Validators.required,Validators.minLength(6)])
  });
  condition:any=true;
  minlength:any
  minpass:any
  phonevalid:any
  passvalid:any
  userLogin(){
    this.heroservice.login_details.forEach((element:any) => {
      if(element.phone==this.login.value.phone && element.pass==this.login.value.pass){
        const person:string=""+this.login.value.phone
        localStorage.setItem("token",person);
        this.condition=false;
      }
      else{
        this.minlength=this.login.get('phone')?.hasError('minlength');
        this.minpass=this.login.get('pass')?.hasError('minlength');
        this.phonevalid=this.login.get('phone')?.invalid;
        this.passvalid=this.login.get('pass')?.invalid;
      }
    });
  }
  logout(){
    localStorage.removeItem("token");
    this.condition=true;
  }
}

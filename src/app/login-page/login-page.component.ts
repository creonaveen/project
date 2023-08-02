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
  error:any
  userLogin(){
    if(this.login.valid){
      this.heroservice.validCheck(this.login.value).subscribe(val=>{
        console.log(val)
        const person:string=""+val;
        localStorage.setItem("token",person);
        this.condition=false;
      },error=>{
        this.error=error;
        this.condition=true;
      })
      return
    }
  }
}

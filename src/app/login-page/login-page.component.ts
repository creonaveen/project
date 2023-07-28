import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  login=new FormGroup ({ phone:new FormControl('',[Validators.required]),
  pass:new FormControl('',[Validators.required])
  });
  userLogin(){
    const person:string=""+this.login.value.phone
    localStorage.setItem("token",person);
  }
  logout(){
    localStorage.removeItem("token");
  }
}

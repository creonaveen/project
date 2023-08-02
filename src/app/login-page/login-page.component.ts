import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router} from '@angular/router';
import { Validators } from '@angular/forms';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  constructor(private heroservice:HeroService,private router:Router){
    this.heroservice.login_details;
  }
  login=new FormGroup ({ phone:new FormControl('',[Validators.required,Validators.minLength(10)]),
  pass:new FormControl('',[Validators.required,Validators.minLength(6)])
  });
  condition:any=true;
  minlength:any=false;
  minpass:any=false;
  phonevalid:any
  passvalid:any
  error:any
  userLogin(){
    if(this.login.valid){
      this.heroservice.validCheck(this.login.value).subscribe(val=>{
        const person:string=""+val;
        localStorage.setItem("token",person);
        this.condition=false;
        this.router.navigate(['/dasboard']);
      },error=>{
        this.error=error.error;
        this.condition=true;
      })
      return
    }
    this.minlength=this.login.get('phone')?.hasError('minlength');
    this.minpass=this.login.get('pass')?.hasError('minlength');
  }
}

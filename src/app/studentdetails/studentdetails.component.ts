import { Component } from '@angular/core';
import { HeroService } from '../hero.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-studentdetails',
  templateUrl: './studentdetails.component.html',
  styleUrls: ['./studentdetails.component.css']
})
export class StudentdetailsComponent {
  constructor(public heroservive:HeroService){
    this.heroservive.student_details;
  }
  student=new FormGroup ({ firstname:new FormControl('',[Validators.required]),
  lastname:new FormControl('',[Validators.required]),
  age:new FormControl(''),
  sub:new FormControl(''),
  class:new FormControl(''),
  phone:new FormControl(''),
  });
  studentSaved(){
    this.heroservive.studentDetailsSaved(this.student.value).subscribe(value=>{
      console.log(value)
    });
  }
}

import { Component } from '@angular/core';
import { HeroService } from '../hero.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-teacherdetails',
  templateUrl: './teacherdetails.component.html',
  styleUrls: ['./teacherdetails.component.css']
})
export class TeacherdetailsComponent {
  constructor(private heroservice:HeroService){
    this.heroservice.teacher_details;
  }
  teacher=new FormGroup ({ firstname:new FormControl('',[Validators.required]),
  lastname:new FormControl('',[Validators.required]),
  teacherid:new FormControl(''),
  sub:new FormControl(''),
  class:new FormControl(''),
  });
  teacherSaved(){
    this.heroservice.teacherDetailsSaved(this.teacher.value).subscribe((value)=>{
      console.log(value); 
    })
  }
}

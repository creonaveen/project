import { Component } from '@angular/core';
import { HeroService } from '../hero.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { first } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-studentdetails',
  templateUrl: './studentdetails.component.html',
  styleUrls: ['./studentdetails.component.css']
})
export class StudentdetailsComponent {
  constructor(public heroservive:HeroService, public matDialog:MatDialog ){
    this.heroservive.student_details;
  }
  student=new FormGroup ({ firstname:new FormControl('',[Validators.required]),
  lastname:new FormControl(''),
  age:new FormControl(''),
  sub:new FormControl(''),
  class:new FormControl(''),
  phone:new FormControl(''),
  });
  update=new FormGroup ({ firstname:new FormControl('',[Validators.required]),
  lastname:new FormControl('',[Validators.required]),
  age:new FormControl('',[Validators.required]),
  sub:new FormControl('',[Validators.required]),
  class:new FormControl('',[Validators.required]),
  phone:new FormControl('',[Validators.required]),
  id:new FormControl('')
  });
  displayedColumns: string[] = ["id","firstname","lastname","age","sub","class","phone",'action'];
  dataSource:any;
  studentSaved(){
    alert("save the value");
   if(this.student.valid){
    this.heroservive.studentDetailsSaved(this.student.value).subscribe(value=>{
      this.tableList(value);
    });
    return;
   }
  }
  open(content:any,row:any){
    this.matDialog.open(content,{height: '95%',
    width: '50%'});
    this.update.controls['firstname'].setValue(row.firstname);
    this.update.controls['lastname'].setValue(row.lastname);
    this.update.controls['sub'].setValue(row.sub);
    this.update.controls['age'].setValue(row.age);
    this.update.controls['class'].setValue(row.class);
    this.update.controls['phone'].setValue(row.phone);
    this.update.controls['id'].setValue(row.id);
  }
  onUpdate(){
    alert("save the value")
    this.heroservive.studentEditSave(this.update.value).subscribe((value)=>{
      this.tableList(value);
    })
  }
  tableList(value:any){
  this.heroservive.tableList(value).subscribe((value)=>{
    this.dataSource=value;
  })
  }
}

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  login_details:any=[{id:"1234",phone:"9445886295",pass:"123456"},
  {id:"12345",phone:"9788586295",pass:"123456"},
  {id:"123",phone:"8695489921",pass:"123456"}]
  student_details:any=[];
  teacher_details:any=[];
  inLogin(){
    return !!localStorage.getItem('token');
  }
  validCheck(login:any){
    const obser=new Observable((val)=>{
    const elemen=this.login_details.find((val:any)=>(val.phone==login.phone && val.pass==val.pass));
    if(elemen.phone==login.phone){
      val.next(elemen.id);
      val.complete();
    }
    else{
      val.error('no phone number');
      val.complete();
    }
    });
    return obser;
  }
  studentDetailsSaved(studentrecord:any){ 
    const obser=new Observable((val)=>{
      if(!("id" in studentrecord)){
        studentrecord["id"]=(Math.floor(Math.random()*10000));
      }
      this.student_details.push(studentrecord);
      val.next(this.student_details);
      val.complete();
    })
    return obser;
  }
  teacherDetailsSaved(teacherrecord:any){
    const obser=new Observable((val)=>{
      this.teacher_details.push(teacherrecord);
      val.next(this.teacher_details);
      val.complete()
    })
    return obser;
  }
  studentEditSave(editvalue:any){
    const obser=new Observable((val)=>{
      this.student_details.forEach((element:any,index:any)=>{
        if(element.id==editvalue.id){
          this.student_details[index]=editvalue;
          val.next(this.student_details);
        }
        val.complete();
      })
    })
    return obser
  }
}

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  student_details:any=[];
  teacher_details:any=[];
  inLogin(){
    return !!localStorage.getItem('token');
  }
  studentDetailsSaved(studentrecord:any){
    const obser=new Observable((val)=>{
      this.student_details.push(studentrecord);
      val.next(studentrecord);
    })
    return obser;
  }
  teacherDetailsSaved(teacherrecord:any){
    const obser=new Observable((val)=>{
      this.teacher_details.push(teacherrecord);
      val.next(this.teacher_details);
    })
    return obser;
  }
}

import { Injectable } from '@angular/core';
import { Observable, first } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  login_details: any = [
    { id: '1234', phone: '9445886295', pass: '123456' },
    { id: '12345', phone: '9788586295', pass: '123456' },
    { id: '123', phone: '8695489921', pass: '123456' },
  ];
  studentrec: any = [
    {
      id: 123,
      firstname: 'parth',
      lastname: 'sokku',
      age: '22',
      sub: '',
      class: '',
      phone: '9807867812',
    },
    {
      id: 124,
      firstname: 'parth',
      lastname: 'sokku',
      age: '22',
      sub: '',
      class: '',
      phone: '9807867812',
    },
    {
      id: 125,
      firstname: 'parth',
      lastname: 'sokku',
      age: '22',
      sub: '',
      class: '',
      phone: '9807867812',
    },
  ];
 
  inLogin() {
    return !!localStorage.getItem('token');
  }
  validCheck(login: any) {
    console.log(this.login_details);
    const obser = new Observable((val) => {
      const elemen = this.login_details.find(
        (val: any) => val.phone == login.phone && val.pass == val.pass
      );
      if (elemen?.phone == login.phone && elemen?.pass == login.pass) {
        val.next(elemen.id);
        val.complete();
      } else {
        val.error({ error: 'no phone number' });
        val.complete();
      }
    });
    return obser;
  }
  studentDetailsSaved(studentrecord: any) {
    const obser = new Observable((val) => {
      if (!('id' in studentrecord)) {
        studentrecord['id'] = Math.floor(Math.random() * 10000);
      }
      this.studentrec.push(studentrecord);
      val.next(this.studentrec);
      val.complete();
    });
    return obser;
  }
  
  studentEditSave(editvalue: any) {
    console.log(this.studentrec);
    const obser = new Observable((val) => {
      const elemen = this.studentrec.find( (val: any) => val.id == editvalue.id );
      if(editvalue){
        elemen['firstname'] = editvalue.firstname;
        elemen['lastname'] = editvalue.lastname;
        elemen['age'] = editvalue.age;
        elemen['sub'] = editvalue.sub;
        elemen['class'] = editvalue.class;
        elemen['phone'] = editvalue.phone;
        val.next(elemen);
        val.complete();
      }else{

      }
       
       
    });
    return obser;
  }
  tableList() {
    const obser = new Observable((val) => {
      val.next(this.studentrec);
      val.complete();
    });
    return obser;
  }
}

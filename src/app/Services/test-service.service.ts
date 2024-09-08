import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestServiceService {


  private userData = new Subject;
  userData$ = this.userData.asObservable();

  constructor() { };

  private users = ['jon' , 'ajit' , 'ram'];

  getData(){
     this.userData.next(this.users);
  }
}

import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss'
})
export class ChildComponent {

  userData = ['ajit' , 'ravi' , 'urmi'];

  @Input("data") data:any;
  @Output("userList") userList = new EventEmitter();

  sendData(){
    this.userList.emit(this.userData);
  }
}

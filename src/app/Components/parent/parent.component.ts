import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss'
})
export class ParentComponent {

  data: string[] = ['ajit' , 'ravi' ,'shyam'];

  userListData(event : any){
      console.log(event);
  }

}

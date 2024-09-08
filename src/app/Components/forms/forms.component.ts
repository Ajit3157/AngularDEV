import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.scss'
})
export class FormsComponent {

  loginObj = {
    username : '',
    password : ''
  }

  onSubmit(form : any){
       console.log(this.loginObj);
  }

}

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TestServiceService } from '../../Services/test-service.service';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrl: './reactive-forms.component.scss'
})
export class ReactiveFormsComponent {
  registerForm:FormGroup;
  color : any;
   constructor(private fb : FormBuilder , private testService : TestServiceService ){
    this.registerForm = this.fb.group({

      name : ['' , Validators.required],
      email : ['' , [ Validators.required , Validators.email ]]

});
this.fetData();
}
  fetData() {
      this.testService.userData$.subscribe((res : any)=>{
        console.log("from Fetch ", res);
      
      })
  }

   ngOnInit(){
      console.log("ngOnInit");
      this.color = "red";
      this.testService.getData();
   }

   ngOnDestroy(){
    console.log("ngOnDestroy");
   }

   ngAfterViewInit(){
    console.log("ngAfterViewInit");

   }

   onSubmit(){

      console.log(this.registerForm.value);
   }


}

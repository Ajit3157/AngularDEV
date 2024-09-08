import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestRoutingComponent } from './Components/test-routing/test-routing.component';
import { ParentComponent } from './Components/parent/parent.component';
import { authGuard } from './Guards/auth-guard.guard';
import { FormsComponent } from './Components/forms/forms.component';
import { ReactiveFormsComponent } from './Components/reactive-forms/reactive-forms.component';
import { RxjsComponent } from './Components/rxjs/rxjs.component';

const routes: Routes = [
  //{ path : '' , component : TestRoutingComponent}
   { path : '' , component : RxjsComponent  , canActivate :[authGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestRoutingComponent } from './Components/test-routing/test-routing.component';
import { ParentComponent } from './Components/parent/parent.component';
import { ChildComponent } from './Components/child/child.component';
import { FormsComponent } from './Components/forms/forms.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReactiveFormsComponent } from './Components/reactive-forms/reactive-forms.component';
import { TestPipePipe } from './Pipes/test-pipe.pipe';
import { HighlightDirective } from './Directive/highlight.directive';
import { RxjsComponent } from './Components/rxjs/rxjs.component';

@NgModule({
  declarations: [
    AppComponent,
    TestRoutingComponent,
    ParentComponent,
    ChildComponent,
    FormsComponent,
    ReactiveFormsComponent,
    TestPipePipe,
    HighlightDirective,
    RxjsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

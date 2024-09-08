import { Component } from '@angular/core';
import { from, map, of, pluck } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrl: './rxjs.component.scss'
})
export class RxjsComponent {


    //observable$ = from([24,5,6]);
    observable$  = of(24,2,3);
    obs2$ = of({
      name : 'ajit'
    } , { name : 'aman'});

    ngOnInit(){
      this.observable$
      .pipe(
        map((val: any) => val * 2) // No need for curly braces or explicit return
      )
      .subscribe((res) => {
        console.log(res);
      });

      this.obs2$.pipe(pluck('name')).subscribe((res)=>{
        console.log(res);
      })
    }

}

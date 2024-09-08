import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from '@angular/router';

// export const authGuardGuard: CanActivateFn = (route, state) => {
//   return true;
// };

@Injectable({
  providedIn : 'root',
})
export class authGuard implements CanActivate{

  constructor(private router : Router){}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):boolean {
     const token = localStorage.getItem('token')?  localStorage.getItem('token') : true;

     if(token){
         if(state.url=="login"){
               // this.router.navigate(['/'])
               return false;
         }else{
            
           // return to required page

           return true;
            
         }
             
     }else{
         return false;
     }
  }

}

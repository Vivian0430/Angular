import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot,Router, CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GuardService implements CanActivate{

  constructor(public router: Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):any{
    if(sessionStorage.getItem("user") && sessionStorage.getItem("pwd")){
      return true;
    }
    this.router.navigate(['/login']);
    return false;
};
}

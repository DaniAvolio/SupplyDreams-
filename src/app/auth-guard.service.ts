import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouteReuseStrategy, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {


  constructor(private as:AuthService, private r:Router ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Promise<boolean> {
      return this.as.isAuth().then(authenticated => {
        if (authenticated)
        {
          return true
        }
        else {
          this.r.navigate(['/log-in'])
          return false
        }
      })
  }
}

import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  LoggedIn = false;

  constructor(private router:Router) { }

  isAuth(){
    return new Promise<boolean>((resolve, reject) => {
      setTimeout(()=>{
        resolve(this.LoggedIn)
      },100)
    })
  }

  login(){
    this.LoggedIn=true
    this.router.navigate(['/log-in'])
  }

  logout(){
    this.LoggedIn=false
    this.router.navigate(['/log-in'])
  }
}


import { getLocaleFirstDayOfWeek } from '@angular/common';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Utente } from './dati/utente.data';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  utenteattivo ?:Utente
  c?: number
  nomeutente?: string
  LoggedIn = false;

  constructor(private router:Router) { }

  isAuth(){
    return new Promise<boolean>((resolve, reject) => {
      setTimeout(()=>{
        resolve(this.LoggedIn)
      },100)
    })
  }
  login(utente:Utente){
    this.utenteattivo=utente
    this.c= this.utenteattivo.email.indexOf('@')
    this.nomeutente= this.utenteattivo?.email.substring(0, this.c)
    console.log("Utente In sessione : "+this.utenteattivo.email);
    this.LoggedIn=true
    this.router.navigate(['/log-in'])
  }

  logout(){
    this.LoggedIn=false
    this.router.navigate(['/log-in'])
  }
}


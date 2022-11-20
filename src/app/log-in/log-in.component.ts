import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Utente } from '../dati/utente.data';
import { UtenteService } from '../utente.service';
@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  islog : boolean
  utenteattivo:any
  errorMessage: string = ""
  invalidLogin = false

  constructor(private as: AuthService, private router:Router, private utserv:UtenteService) {
    this.islog = as.LoggedIn
    console.log("islog e" +this.islog);
   }

  ngOnInit(): void {
  }

  onLogin(ngform: NgForm){
    var utente = ngform.value
    for(var i=0; i<this.utserv.utenti.length;i++){
      if(utente.email==this.utserv.utenti[i].email && utente.password==this.utserv.utenti[i].password)
      {
        this.as.login(utente)
        this.islog = this.as.LoggedIn
        this.router.navigate(["/account"])
        this.utenteattivo = this.as.utenteattivo
      }
      else if(utente.email!=this.utserv.utenti[i].email && utente.password!=this.utserv.utenti[i].password){
        this.invalidLogin = true
        this.errorMessage = "Invalid Credentials"
      }
    }
  }
  onLogout(){
    this.as.logout()
    this.islog = this.as.LoggedIn

  }

}

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
  constructor(private as: AuthService, private router:Router, private utserv:UtenteService) {
    this.islog = as.LoggedIn
   }

  ngOnInit(): void {
  }
  onSubmit(ngform: NgForm) {
    console.log(ngform);
  }
  onLogin(ngform: NgForm){
    var utente = ngform.value
    console.log("utente in arrivo dal form: "+utente);
    for(var i=0; i<this.utserv.utenti.length;i++){
      if(utente.email==this.utserv.utenti[i].email && utente.password==this.utserv.utenti[i].password)
      {
        this.as.login(utente)
        this.islog = this.as.LoggedIn
        this.router.navigate(["/carrello"])
      }
    }
  }

}

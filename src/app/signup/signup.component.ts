import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { UtenteService } from '../utente.service';
import { Utente } from '../dati/utente.data';
import { NgClass, NgFor } from '@angular/common';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private utserv:UtenteService, private route: Router) { }

  ngOnInit(): void {
  }

  onSignup(ngform:NgForm){
    var utente = ngform.value
    this.utserv.insertUtenti(this.utserv.url,
      {email: utente.email  , password: utente.password }
      ).subscribe(data=>{
        console.log(data);
      })
      alert("ti sei registrato con successo")
      this.route.navigate(["/log-in"])
  }

}

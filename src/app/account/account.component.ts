import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { ProdottoService } from '../prodotto.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  islog : boolean
  utenteattivo:any
  constructor(private as: AuthService, private prodserv:ProdottoService, private route:Router) {
    this.islog = as.LoggedIn
    this.utenteattivo=as.utenteattivo
  }

  ngOnInit(): void {
  }

  onSubmit(ngform: NgForm){

  }
  onLogout(){
    this.as.logout()
    this.islog = this.as.LoggedIn
    this.route.navigate(["/log-in"])
  }

}

import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { ProdottoService } from '../prodotto.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  islog : boolean
  constructor(private as: AuthService, private prodserv:ProdottoService) {
    this.islog = as.LoggedIn
  }

  ngOnInit(): void {
  }

  onSubmit(ngform: NgForm){
    
  }
  onLogout(){
    this.as.logout()
    this.islog = this.as.LoggedIn
  }

}

import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  islog : boolean
  constructor(private as: AuthService) {
    this.islog = as.LoggedIn
   }

  ngOnInit(): void {
  }
  onSubmit(ngform: NgForm) {
    console.log(ngform);
  }
  onLogin(){
    this.as.login()
    this.islog = this.as.LoggedIn
  }
  onLogout(){
    this.as.logout()
    this.islog = this.as.LoggedIn
  }

}

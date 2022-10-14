import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-regards',
  templateUrl: './regards.component.html',
  styleUrls: ['./regards.component.css']
})
export class RegardsComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  onTornaAHome(){
    this.router.navigate(["/"])

  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProdottoService } from '../prodotto.service';

@Component({
  selector: 'app-regards',
  templateUrl: './regards.component.html',
  styleUrls: ['./regards.component.css']
})
export class RegardsComponent implements OnInit {

  constructor(private router:Router, private prodserv: ProdottoService) { }

  ngOnInit(): void {
  }
  onTornaAHome(){

    this.router.navigate(["/"])

  }

}

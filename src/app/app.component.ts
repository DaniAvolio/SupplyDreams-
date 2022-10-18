import { Component, OnInit } from '@angular/core';
import { ProdottoService } from './prodotto.service';

import { Prodotto } from './dati/prodotto.data';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  title = 'progetto-Angular';
  carrello:Prodotto[] = []
  constructor(private prodserv:ProdottoService){
  }
  ngOnInit(): void {

  }
  callcar(){
    this.carrello=this.prodserv.carrello
  }




}

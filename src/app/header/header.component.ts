import { Component, OnInit } from '@angular/core';
import { ProdottoService } from '../prodotto.service';
import { Prodotto } from '../dati/prodotto.data';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  carrello:Prodotto[] = []

  constructor(private prodserv: ProdottoService) {

   }

  ngOnInit(): void {
  }

  lunghezzacarrello():number{
    this.carrello=this.prodserv._carrello
    return this.carrello.length

  }





}

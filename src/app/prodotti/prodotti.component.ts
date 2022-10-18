import { NumberFormatStyle } from '@angular/common';
import { Component, OnInit, Input} from '@angular/core';
import { Prodotto } from '../dati/prodotto.data'
import { ProdottoService, } from '../prodotto.service';

@Component({
  selector: 'app-prodotti',
  templateUrl: './prodotti.component.html',
  styleUrls: ['./prodotti.component.css']
})
export class ProdottiComponent implements OnInit {
[x: string]: any;

  prodotti: Prodotto[] = []
  ricerca= ""
  totale: number = 0
  carrello: Prodotto[] = []


  constructor(private prodserv:ProdottoService) {
    this.prodotti = prodserv.prodotti
    this.carrello = prodserv.carrello
   }

  ngOnInit(): void {
  }
  AggiungiACarrello(prod:Prodotto){
    prod.aggiunto=true
    this.prodserv.aggiungiACarrello(prod)
    this.carrello= this.prodserv._carrello
  }
  RimuovidaCarrello(prod:Prodotto){
    prod.aggiunto=false
    this.prodserv.togliDaCarrello(prod)
  }


}

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

  constructor(private prodserv:ProdottoService) {
    this.prodotti = prodserv.prodotti
   }

  ngOnInit(): void {
  }
  AggiungiACarrello(prod:Prodotto){
    prod.selezionato=true
    this.totale= this.totale+<number>prod.prezzo
    window.localStorage.setItem("tot",this.totale+"")
    this.prodserv.aggiungiACarrello(prod)
  }
  RimuovidaCarrello(prod:Prodotto){
    prod.selezionato=false
    this.totale= this.totale-<NumberFormatStyle>prod.prezzo
    window.localStorage.setItem("tot",this.totale+"")
    console.log(this.totale);


  }


}

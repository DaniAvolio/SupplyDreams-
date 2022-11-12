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
  quantitaselezionata: number = 1
  prodotti: Prodotto[] = []
  ricerca= ""
  carrello: Prodotto[] = []


  constructor(private prodserv:ProdottoService) {
    this.prodotti = prodserv.prodotti
    this.carrello = prodserv.carrello
   }

  ngOnInit(): void {
    // this.prodserv.getProdotti(this.prodserv.url)
    // .subscribe((data: any) =>{
    //   this.prodotti = Object.keys(data).map((key) => {return data[key]})
    // })
  }
  AggiungiACarrello(prod:Prodotto){
    var q= this.quantitaselezionata
    prod.aggiunto=true
    this.prodserv.aggiungiACarrello(prod, q)
    this.carrello= this.prodserv._carrello
    alert("x"+prod.quantita + " " + prod.nome + " aggiunto al carrello")
  }
  RimuovidaCarrello(prod:Prodotto){
    prod.aggiunto=false
    this.prodserv.togliDaCarrello(prod)
  }


}

import { Component, OnInit } from '@angular/core';
import { Prodotto } from '../dati/prodotto.data';
import { ProdottoService } from '../prodotto.service';
import { ProdottiComponent } from '../prodotti/prodotti.component';

@Component({
  selector: 'app-carrello',
  templateUrl: './carrello.component.html',
  styleUrls: ['./carrello.component.css']
})
export class CarrelloComponent implements OnInit {
  prodotti: Prodotto[] = []
  totale: any = window.localStorage.getItem("tot")
  carrello: Prodotto[] = []

  constructor(private prodserv:ProdottoService) {
    this.prodotti = prodserv.prodotti
    this.carrello = prodserv._carrello

   }

  ngOnInit(): void {



  }

  rimuovi(prod:Prodotto){
    prod.selezionato = false
    this.totale=this.totale-<number>prod.prezzo
    window.localStorage.setItem("tot",this.totale+"")
  }
  totaleprezzo(){
  }

}

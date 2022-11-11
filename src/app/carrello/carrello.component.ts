import { Component, OnInit } from '@angular/core';
import { Prodotto } from '../dati/prodotto.data';
import { ProdottoService } from '../prodotto.service';
import { ProdottiComponent } from '../prodotti/prodotti.component';
import { flush } from '@angular/core/testing';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carrello',
  templateUrl: './carrello.component.html',
  styleUrls: ['./carrello.component.css']
})
export class CarrelloComponent implements OnInit {
  prodotti: Prodotto[] = []
  carrello: Prodotto[] = []
  totale: number

  constructor(private prodserv:ProdottoService, private router:Router) {
    this.prodotti = prodserv.prodotti
    this.carrello = prodserv._carrello
    this.totale = prodserv.totale
   }

  ngOnInit(): void {
  }

  rimuovi(prod:Prodotto){
    prod.aggiunto=false
    this.prodserv.togliDaCarrello(prod)
    this.carrello= this.prodserv.carrello
    this.totale=this.prodserv.totale
}
onTornaAProdotti(){
  this.router.navigate(["/prodotti"])
}
// calcolaquantita():number{
//   var q=0
//   var prod:Prodotto
//   for(var i= 0;i<this.prodserv.carrello.length; i++){
//     q=q+this.prodserv.carrello[i].quantita
//     console.log("sososo",q);
//   }
//   return q
// }


}

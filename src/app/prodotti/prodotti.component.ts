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
}

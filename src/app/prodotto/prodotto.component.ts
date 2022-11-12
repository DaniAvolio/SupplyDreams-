import { Component, OnInit } from '@angular/core';
import { Prodotto } from '../dati/prodotto.data'
import { ProdottoService } from '../prodotto.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-prodotto',
  templateUrl: './prodotto.component.html',
  styleUrls: ['./prodotto.component.css']
})
export class ProdottoComponent implements OnInit {

  prodotto?:Prodotto
  subscription?:Subscription

  constructor(private route: ActivatedRoute, private prodottoService:ProdottoService, private router :Router) {
    const { slug } = this.route?.snapshot?.params ?? {}
    //const slug = route.snapshot.params["slug"]
    this.prodotto = this.prodottoService.cercaProdotto(slug)

    this.subscription = this.route.params.subscribe(params => {
      const { slug } = params
      this.prodotto = this.prodottoService.cercaProdotto(slug)
    })
  }

  ngOnInit(): void {
  }
  AggiungiACarrello(){
    this.prodottoService.aggiungiACarrello(<Prodotto>this.prodotto, 1)
    this.prodottoService.change(<Prodotto>this.prodotto)
  }

}

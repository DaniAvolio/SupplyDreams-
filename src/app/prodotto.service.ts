import { Injectable } from '@angular/core';
import { Prodotto } from './dati/prodotto.data';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdottoService {

  private _prodotti : Prodotto[] = [
    {slug:"prod1", nome:"proteine whey concentrate",
     foto:"../assets/images/protein-powder.png",
      prezzo:29.99, marca:"Prozis", desc:"proteine del siero del latte concentrate della prozis. Ideali prima o dopo il workout"},
    {slug:"prod2", nome:"proteine whey isolate",
    foto:"../assets/images/whey-protein.png",
    prezzo:39.99, marca: "Prozis", desc:"proteine del siero del latte isolate della prosis. Ideale per chi cerca uno sprint in più dalle classiche isolate, la qunatità di proteine è molto maggiore"},
    {slug:"prod3", nome:"proteine whey idrolizzate",
     foto:"../assets/images/protein-shake.png",
      prezzo:99.99, marca: "BulkPowders", desc:"proteine del siero del latte idrolizzate della bulkpowders. Solo per pro, niente scuse"},
    {slug:"prod4", nome:"proteine whey concentrate",
     foto:"../assets/images/whey.png",
      prezzo:34.99, marca: "MyProtein", desc:"proteine del siero del latte della myprotein, ideali dopo il workout, qualità certificata!"},
    {slug:"prod5", nome:"creatina monoidrato @creapure",
    foto:"../assets/images/whey-protein (1).png",
     prezzo:39.99, marca: "Prozis", desc:"creatina monoidrato della prozis certificata @creapure, prodotta in germania. Assumi dai 3 ai 5 gr al giorno per contribuire allo sviluppo di massa muscolare"},
    {slug:"prod6", nome:"creatina in capsule",
    foto:"../assets/images/pills-bottle.png",
     prezzo:19.99, marca: "BulkPowders", desc:"creatina in capsule della bulkpowders, economica e funzionale! 4 pillole al giorno"},
    {slug:"prod7", nome:"creatina monoidrato @creapure",
    foto:"../assets/images/whey (1).png",
    prezzo:49.99, marca: "MyProtein", desc:"creatina monoidrato della myprotein certificata @creapure, assumi 5 gr al giorno pre o post workout per ottenere risultati ottimali"},
    {slug:"prod8", nome:"proteine whey isolate ",
    foto:"../assets/images/whey-protein (2).png",
     prezzo:44.99, marca: "MyProtein", desc:"proteine del siero del latte isolate della myprotein, efficaci e con piu % di proteine, qualita certificata!"},
  ]

  private _carrello: Prodotto[] = []

  public emitter = new Subject<Prodotto[]>()

  constructor() { }

  AggiungiACarrello(prod:Prodotto){
    this._carrello.push(prod)
  }
  togliDaCarrello(prod:Prodotto) {
    this._carrello = this._carrello.filter(p => p !== prod)
  }

  get prodotti() {
    return [...this._prodotti]
  }

  get carrello() {
    return [...this._carrello]
  }

}

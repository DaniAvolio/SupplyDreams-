import { Injectable } from '@angular/core';
import { Prodotto } from './dati/prodotto.data';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdottoService {

  private _prodotti : Prodotto[] = [
    {slug:"prod1", nome:"proteine whey concentrate",
     foto:"https://static.sscontent.com/thumb/500/500/products/124/v1111855_prozis_100-real-whey-protein-1000-g_natural_newin_flavor.jpg",
      prezzo:29.99, marca:"Prozis", desc:"proteine del siero del latte concentrate della prozis. Ideali prima o dopo il workout", categoria:"proteine", feat:"concentrate",feat1:"alta solubilità",feat2:"economiche"},
    {slug:"prod2", nome:"proteine whey isolate",
    foto:"https://static.sscontent.com/thumb/500/500/products/124/v1112423_prozis_100-real-whey-isolate-1000-g_banana-walnut_newin_flavor.jpg",
    prezzo:39.99, marca: "Prozis", desc:"proteine del siero del latte isolate della prosis. Ideale per chi cerca uno sprint in più dalle classiche, la qunatità di proteine è molto maggiore", categoria:"proteine", feat:"90% proteine",feat1:"alta qualità",feat2:"senza lattosio"},
    {slug:"prod3", nome:"proteine whey idrolizzate",
     foto:"https://www.bulk.com/media/catalog/product/cache/1500x1500/h/y/hydrolysed-whey-protein-isolate_bpb-hwpi-0000_main.jpg",
      prezzo:99.99, marca: "BulkPowders", desc:"proteine del siero del latte idrolizzate della bulkpowders. Solo per pro, niente scuse", categoria:"proteine", feat:"95% proteine",feat1:"idrolizzate",feat2:"qualità certificata"},
    {slug:"prod4", nome:"proteine whey concentrate",
     foto:"https://static.thcdn.com/images/large/webp/productimg/1600/1600/10529583-8924669594054542.jpg",
      prezzo:34.99, marca: "MyProtein", desc:"proteine del siero del latte della myprotein, ideali dopo il workout, qualità certificata!", categoria:"proteine", feat:"alta qualità",feat1:"concentrate",feat2:"solubilità top"},
    {slug:"prod5", nome:"creatina monoidrato @creapure",
    foto:"https://static.sscontent.com/thumb/500/500/products/124/v1102517_prozis_creatine-creapure-300-g_natural_newin_flavor.jpg",
     prezzo:39.99, marca: "Prozis", desc:"creatina monoidrato della prozis certificata @creapure, prodotta in germania. Assumi dai 3 ai 5 gr al giorno per contribuire allo sviluppo di massa muscolare", categoria:"creatina", feat:"@creapure",feat1:"made in Germany",feat2:"certificata"},
    {slug:"prod6", nome:"creatina in capsule",
    foto:"https://www.bulk.com/media/catalog/product/cache/1500x1500/c/r/creatine-monohydrate-pillpot_thumbanil.jpg",
     prezzo:19.99, marca: "BulkPowders", desc:"creatina in capsule della bulkpowders, economica e funzionale! 4 pillole al giorno", categoria:"creatina", feat:"in pillole",feat1:"facilmente ingeribile",feat2:"qualità bulk"},
    {slug:"prod7", nome:"creatina monoidrato @creapure",
    foto:"https://static.thcdn.com/images/large/webp//productimg/1600/1600/10529740-6484889442818601.jpg",
    prezzo:49.99, marca: "MyProtein", desc:"creatina monoidrato della myprotein certificata @creapure, assumi 5 gr al giorno pre o post workout per ottenere risultati ottimali", categoria:"creatina", feat:"@creapure",feat1:"filiera tracciata",feat2:"aumento massa muscolare"},
    {slug:"prod8", nome:"proteine whey isolate ",
    foto:"https://static.thcdn.com/images/large/webp//productimg/1600/1600/10530911-5884889444360331.jpg",
     prezzo:44.99, marca: "MyProtein", desc:"proteine del siero del latte isolate della myprotein, efficaci e con piu % di proteine, qualita certificata!", categoria:"proteine", feat:"isolate ",feat1:"+85% proteine",feat2:"alta qualità"},
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
  cercaProdotto(slug: string) {
    return this._prodotti.find(p => p.slug === slug)
  }

  get prodotti() {
    return [...this._prodotti]
  }

  get carrello() {
    return [...this._carrello]
  }

}
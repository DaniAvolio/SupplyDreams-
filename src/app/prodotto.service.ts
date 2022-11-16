import { Injectable } from '@angular/core';
import { Prodotto } from './dati/prodotto.data';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProdottoService {
  public url= 'https://progettoangular-9c931-default-rtdb.europe-west1.firebasedatabase.app/prodotti.json'

  public prodotti : Prodotto[] = [
    // {quantita: 0, aggiunto:false, slug:"prod1", nome:"proteine whey concentrate",
    //  foto:".//src/assets/images/ProtieneProzis1.jpg",
    //   prezzo:29.99, marca:"Prozis", desc:"proteine del siero del latte concentrate della prozis. Ideali prima o dopo il workout", categoria:"proteine", feat:"concentrate",feat1:"alta solubilità",feat2:"economiche"},
    // {quantita: 0, aggiunto:false, slug:"prod2", nome:"proteine whey isolate",
    // foto:".//src/assets/images/proteineprozis2.jpg",
    // prezzo:39.99, marca: "Prozis", desc:"proteine del siero del latte isolate della prosis. Ideale per chi cerca uno sprint in più dalle classiche, la qunatità di proteine è molto maggiore", categoria:"proteine", feat:"90% proteine",feat1:"alta qualità",feat2:"senza lattosio"},
    // {quantita: 0, aggiunto:false, slug:"prod3", nome:"proteine whey idrolizzate",
    //  foto:".//src/assets/images/proteineisolatebulk.webp",
    //   prezzo:99.99, marca: "BulkPowders", desc:"proteine del siero del latte idrolizzate della bulkpowders. Solo per pro, niente scuse", categoria:"proteine", feat:"95% proteine",feat1:"idrolizzate",feat2:"qualità certificata"},
    // {quantita: 0, aggiunto:false, slug:"prod4", nome:"proteine whey concentrate",
    //  foto:".//src/assets/images/proteinemyp1.webp",
    //   prezzo:34.99, marca: "MyProtein", desc:"proteine del siero del latte della myprotein, ideali dopo il workout, qualità certificata!", categoria:"proteine", feat:"alta qualità",feat1:"concentrate",feat2:"solubilità top"},
    // {quantita: 0, aggiunto:false, slug:"prod5", nome:"creatina monoidrato @creapure",
    // foto:".//src/assets/images/creatinaprozis.jpg",
    //  prezzo:39.99, marca: "Prozis", desc:"creatina monoidrato della prozis certificata @creapure, prodotta in germania. Assumi dai 3 ai 5 gr al giorno per contribuire allo sviluppo di massa muscolare", categoria:"creatina", feat:"@creapure",feat1:"made in Germany",feat2:"certificata"},
    // {quantita: 0, aggiunto:false, slug:"prod6", nome:"creatina in capsule",
    // foto:".//src/assets/images/creatinabulk.webp",
    //  prezzo:19.99, marca: "BulkPowders", desc:"creatina in capsule della bulkpowders, economica e funzionale! 4 pillole al giorno", categoria:"creatina", feat:"in pillole",feat1:"facilmente ingeribile",feat2:"qualità bulk"},
    // {quantita: 0, aggiunto:false, slug:"prod7", nome:"creatina monoidrato @creapure",
    // foto:".//src/assets/images/creatinamyp.webp",
    // prezzo:49.99, marca: "MyProtein", desc:"creatina monoidrato della myprotein certificata @creapure, assumi 5 gr al giorno pre o post workout per ottenere risultati ottimali", categoria:"creatina", feat:"@creapure",feat1:"filiera tracciata",feat2:"aumento massa muscolare"},
    // {quantita: 0, aggiunto:false, slug:"prod8", nome:"proteine whey isolate ",
    // foto:".//src/assets/images/isolatemyo.webp",
    //  prezzo:44.99, marca: "MyProtein", desc:"proteine del siero del latte isolate della myprotein, efficaci e con piu % di proteine, qualita certificata!", categoria:"proteine", feat:"isolate ",feat1:"+85% proteine",feat2:"alta qualità"},
    //  {quantita: 0, aggiunto:false, slug:"prod9", nome:"6x barrette proteiche ",
    // foto:".//src/assets/images/bar1prozis.jpg",
    //  prezzo:9.99, marca: "Prozis", desc:"barrette proteiche Prozis, gustose e croccanti. Raggiungi i tuoi obbiettivi consumando queste barrette come snack alternativo", categoria:"barrette", feat:"gustose",feat1:"20% proteine",feat2:"senza lattosio"},
    //  {quantita: 0, aggiunto:false, slug:"prod10", nome:"4x barrette proteiche ",
    //  foto:".//src/assets/images/barmyp.webp",
    //   prezzo:9.99, marca: "MyProtein", desc:"barrette proteiche alta qualità MyProtein, oltre il 40% di proteine e creatina. Disponibili in vari gusti uno più buono dell'altro.", categoria:"barrette", feat:"+40% proteine",feat1:"Alta Qualità",feat2:"con creatina"},
    //   {quantita: 0, aggiunto:false, slug:"prod11", nome:"proteine concentrate dell'uovo ",
    //   foto:".//src/assets/images/proteuovobulk.webp",
    //    prezzo:24.99, marca: "BulkPowders", desc:"Proteine dell'uovo della bulk, ideale per gli intolleranti al lattosio e per chi vuole uno sprint dalle classiche proteine. Facilmente assorbibili e comunque gustose", categoria:"proteine", feat:"senza lattosio",feat1:"meglio assimilabili",feat2:"70% proteine"},
    //    {quantita: 0, aggiunto:false, slug:"prod12", nome:"6x barrette proteiche GyM",
    //    foto:".//src/assets/images/bar3prozis.jpg",
    //     prezzo:14.99, marca: "Prozis", desc:"barrette proteiche Prozis, gustose e croccanti. con il 60% di proteine queste barrette sono ideali per chi ha un fabbisogno proteico elevata. con 1 ingerisci ben 20 grammi di proteine d ialta qualità!", categoria:"barrette", feat:"con creatina",feat1:"60% proteine",feat2:"alta qualità"}
  ]

  public _carrello: Prodotto[] = []

  public totale: number = 0

  public emitter = new Subject<Prodotto[]>()

  constructor(private http: HttpClient) {
    this.getProdotti(this.url)
    .subscribe((data: any) =>{
      this.prodotti = Object.keys(data).map((key) => {return data[key]})
    })
   }

  aggiungiACarrello(prod:Prodotto, q:number){
    prod.quantita= q
    this._carrello.push(prod)
    this.totale = this.totale + (<number>prod.prezzo*prod.quantita)
  }
  togliDaCarrello(prod:Prodotto) {
    this.totale = this.totale - (<number>prod.prezzo*prod.quantita)
    prod.quantita=0
    this._carrello = this._carrello.filter(p => p !== prod)
  }
  cercaProdotto(slug: string) {
    return this.prodotti.find(p => p.slug === slug)
  }

  change(prod:Prodotto){
    prod.aggiunto=true
  }

  // get prodotti() {
  //   return [...this.prodotti]
  // }

  get carrello() {
    return [...this._carrello]
  }


//db QUERY

  insertProdotti(url:string, data: {}){
    return this.http.post(url, data)

  }

  getProdotti(url:string){
    return this.http.get(url)
  }
}


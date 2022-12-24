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
    {
      "aggiunto": false,
      "categoria": "proteine",
      "desc": "proteine del siero del latte concentrate della prozis. Ideali prima o dopo il workout",
      "feat": "concentrate",
      "feat1": "alta solubilità",
      "feat2": "economiche",
      "foto": ".//src/assets/images/ProtieneProzis1.jpg",
      "marca": "Prozis",
      "nome": "proteine whey concentrate",
      "prezzo": 29.99,
      "quantita": 0,
      "slug": "prod1"
    },
    {
      "aggiunto": false,
      "categoria": "proteine",
      "desc": "proteine del siero del latte isolate della prosis. Ideale per chi cerca uno sprint in più dalle classiche, la qunatità di proteine è molto maggiore",
      "feat": "90% proteine",
      "feat1": "alta qualità",
      "feat2": "senza lattosio",
      "foto": ".//src/assets/images/proteineprozis2.jpg",
      "marca": "Prozis",
      "nome": "proteine whey isolate",
      "prezzo": 39.99,
      "quantita": 0,
      "slug": "prod2"
    },
    {
      "aggiunto": false,
      "categoria": "proteine",
      "desc": "proteine del siero del latte idrolizzate della bulkpowders. Solo per pro, niente scuse",
      "feat": "95% proteine",
      "feat1": "idrolizzate",
      "feat2": "qualità certificata",
      "foto": ".//src/assets/images/proteineisolatebulk.webp",
      "marca": "BulkPowders",
      "nome": "proteine whey idrolizzate",
      "prezzo": 99.99,
      "quantita": 0,
      "slug": "prod3"
    },
    {
      "aggiunto": false,
      "categoria": "proteine",
      "desc": "proteine del siero del latte della myprotein, ideali dopo il workout, qualità certificata!",
      "feat": "alta qualità",
      "feat1": "concentrate",
      "feat2": "solubilità top",
      "foto": ".//src/assets/images/proteinemyp1.webp",
      "marca": "MyProtein",
      "nome": "proteine whey concentrate",
      "prezzo": 34.99,
      "quantita": 0,
      "slug": "prod4"
    },
    {
      "aggiunto": false,
      "categoria": "creatina",
      "desc": "creatina monoidrato della prozis certificata @creapure, prodotta in germania. Assumi dai 3 ai 5 gr al giorno per contribuire allo sviluppo di massa muscolare",
      "feat": "@creapure",
      "feat1": "made in Germany",
      "feat2": "certificata",
      "foto": ".//src/assets/images/creatinaprozis.jpg",
      "marca": "Prozis",
      "nome": "creatina monoidrato @creapure",
      "prezzo": 39.99,
      "quantita": 0,
      "slug": "prod5"
    },
   {
      "aggiunto": false,
      "categoria": "creatina",
      "desc": "creatina in capsule della bulkpowders, economica e funzionale! 4 pillole al giorno",
      "feat": "in pillole",
      "feat1": "facilmente ingeribile",
      "feat2": "qualità bulk",
      "foto": ".//src/assets/images/creatinabulk.webp",
      "marca": "BulkPowders",
      "nome": "creatina in capsule",
      "prezzo": 19.99,
      "quantita": 0,
      "slug": "prod6"
    },
    {
      "aggiunto": false,
      "categoria": "creatina",
      "desc": "creatina monoidrato della myprotein certificata @creapure, assumi 5 gr al giorno pre o post workout per ottenere risultati ottimali",
      "feat": "@creapure",
      "feat1": "filiera tracciata",
      "feat2": "aumento massa muscolare",
      "foto": ".//src/assets/images/creatinamyp.webp",
      "marca": "MyProtein",
      "nome": "creatina monoidrato @creapure",
      "prezzo": 49.99,
      "quantita": 0,
      "slug": "prod7"
    },
    {
      "aggiunto": false,
      "categoria": "proteine",
      "desc": "proteine del siero del latte isolate della myprotein, efficaci e con piu % di proteine, qualita certificata!",
      "feat": "isolate ",
      "feat1": "+85% proteine",
      "feat2": "alta qualità",
      "foto": ".//src/assets/images/isolatemyo.webp",
      "marca": "MyProtein",
      "nome": "proteine whey isolate ",
      "prezzo": 44.99,
      "quantita": 0,
      "slug": "prod8"
    },
    {
      "aggiunto": false,
      "categoria": "barrette",
      "desc": "barrette proteiche Prozis, gustose e croccanti. Raggiungi i tuoi obbiettivi consumando queste barrette come snack alternativo",
      "feat": "gustose",
      "feat1": "20% proteine",
      "feat2": "senza lattosio",
      "foto": ".//src/assets/images/bar1prozis.jpg",
      "marca": "Prozis",
      "nome": "6x barrette proteiche ",
      "prezzo": 9.99,
      "quantita": 0,
      "slug": "prod9"
    },
   {
      "aggiunto": false,
      "categoria": "barrette",
      "desc": "barrette proteiche alta qualità MyProtein, oltre il 40% di proteine e creatina. Disponibili in vari gusti uno più buono dell'altro.",
      "feat": "+40% proteine",
      "feat1": "Alta Qualità",
      "feat2": "con creatina",
      "foto": ".//src/assets/images/barmyp.webp",
      "marca": "MyProtein",
      "nome": "4x barrette proteiche ",
      "prezzo": 9.99,
      "quantita": 0,
      "slug": "prod10"
    },
   {
      "aggiunto": false,
      "categoria": "proteine",
      "desc": "Proteine dell'uovo della bulk, ideale per gli intolleranti al lattosio e per chi vuole uno sprint dalle classiche proteine. Facilmente assorbibili e comunque gustose",
      "feat": "senza lattosio",
      "feat1": "meglio assimilabili",
      "feat2": "70% proteine",
      "foto": ".//src/assets/images/proteuovobulk.webp",
      "marca": "BulkPowders",
      "nome": "proteine concentrate dell'uovo ",
      "prezzo": 24.99,
      "quantita": 0,
      "slug": "prod11"
    },
    {
      "aggiunto": false,
      "categoria": "barrette",
      "desc": "barrette proteiche Prozis, gustose e croccanti. con il 60% di proteine queste barrette sono ideali per chi ha un fabbisogno proteico elevata. con 1 ingerisci ben 20 grammi di proteine d ialta qualità!",
      "feat": "con creatina",
      "feat1": "60% proteine",
      "feat2": "alta qualità",
      "foto": ".//src/assets/images/bar3prozis.jpg",
      "marca": "Prozis",
      "nome": "6x barrette proteiche GyM",
      "prezzo": 14.99,
      "quantita": 0,
      "slug": "prod12"
    },
   {
      "aggiunto": false,
      "categoria": "biscotti",
      "desc": "biscotti proteici della Prozis al gusto biscotto e crema. Ottimi come sostituto di pasto o come spuntino quando sei fuori casa",
      "feat": "gustosi",
      "feat1": "30% proteine",
      "feat2": "take away",
      "foto": ".//src/assets/images/biscottoprozis.jpg",
      "marca": "Prozis",
      "nome": "x2 biscotti proteici",
      "prezzo": 3.99,
      "quantita": 0,
      "slug": "prod13"
    },
   {
      "aggiunto": false,
      "categoria": "biscotti",
      "desc": "Biscotti proteici della MyProtien al gusto cioccolato. Ottimi come sostituto di pasto o come spuntino quando sei fuori casa",
      "feat": "gustosi",
      "feat1": "50% proteine",
      "feat2": "aumento massa muscolare",
      "foto": ".//src/assets/images/biscottomyprotein.webp",
      "marca": "MyProtein",
      "nome": "x3 biscotti proteici",
      "prezzo": 4.99,
      "quantita": 0,
      "slug": "prod14"
    },
    {
      "aggiunto": false,
      "categoria": "vitamine",
      "desc": "Integratore di vitamina D al gusto zuccheroso in quanto sottoforma di caramelle gommose. 2 caramelle al giorno per raggiungere la quoota di vitamina d richiesta durante tutta la giornata!",
      "feat": "caramelle",
      "feat1": "50% quota giornaliera",
      "feat2": "salute e benesse",
      "foto": ".//src/assets/images/vitaminadmyp.webp",
      "marca": "MyProtein",
      "nome": "Vitamina D in caramelle gommose",
      "prezzo": 9.99,
      "quantita": 0,
      "slug": "prod15"
    },
    {
      "aggiunto": false,
      "categoria": "vitamine",
      "desc": "Caramelle gommose al gusto di mirtillo arricchite con multivitaminici, per aiutare la persona durante tutta la giornata a rimanere forte e in salute!",
      "feat": "caramelle",
      "feat1": "fruttate",
      "feat2": "con multivitaminico",
      "foto": ".//src/assets/images/caramellevitamineprozis.jpg",
      "marca": "Prozis",
      "nome": "Caramelle gommose multivitaminiche",
      "prezzo": 2.99,
      "quantita": 0,
      "slug": "prod16"
    }


  ]

  public carrello: Prodotto[] = []

  public totale: number = 0

  public emitter = new Subject<Prodotto[]>()

  constructor(private http: HttpClient) {
    // this.getProdotti(this.url)
    // .subscribe((data: any) =>{
    //   this.prodotti = Object.keys(data).map((key) => {return data[key]})
    // })
   }

  aggiungiACarrello(prod:Prodotto, q:number){
    prod.quantita= q
    this.carrello.push(prod)
    this.totale = this.totale + (<number>prod.prezzo*prod.quantita)
  }
  togliDaCarrello(prod:Prodotto) {
    this.totale = this.totale - (<number>prod.prezzo*prod.quantita)
    prod.quantita=0
    this.carrello = this.carrello.filter(p => p !== prod)
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



//db QUERY

  insertProdotti(url:string, data: {}){
    return this.http.post(url, data)

  }

  getProdotti(url:string){
    return this.http.get(url)
  }
}


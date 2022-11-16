import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { ProdottoService } from '../prodotto.service';
import { UtenteService } from '../utente.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, private prodserv:ProdottoService, private utserv:UtenteService) { }

  ngOnInit(): void {
    // POST FOR INSERT PRODUCTS IN DB
    // this.prodserv.insertProdotti(this.prodserv.url,
    // {quantita: 0, aggiunto:false, slug:"prod16", nome:"Caramelle gommose multivitaminiche",
    //   foto:".//src/assets/images/caramellevitamineprozis.jpg",
    //   prezzo:2.99, marca:"Prozis", desc:"Caramelle gommose al gusto di mirtillo arricchite con multivitaminici, per aiutare la persona durante tutta la giornata a rimanere forte e in salute!", categoria:"vitamine", feat:"caramelle",feat1:"fruttate",feat2:"con multivitaminico"}
    // ).subscribe(data =>{
    //   console.log(data);
    // })

    //POST FOR INSERT UTENTI IN DB
    // this.utserv.insertUtenti(this.utserv.url,
    //   {email:"io@io.it", password:"ioioio123"}
    //   ).subscribe(data=>{
    //     console.log(data);
    //   })

  }

  onVaiAProdotti() {
    this.router.navigate(["/prodotti"])
  }
}

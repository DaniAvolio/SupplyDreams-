import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { ProdottoService } from '../prodotto.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, private prodserv:ProdottoService) { }

  ngOnInit(): void {
    //post for insert data in db
    // this.prodserv.insertProdotti(this.prodserv.url,
    // {quantita: 0, aggiunto:false, slug:"prod13", nome:"x2 biscotti proteici",
    //   foto:".//src/assets/images/biscottoprozis.jpg",
    //   prezzo:3.99, marca:"Prozis", desc:"biscotti proteici della Prozis al gusto biscotto e crema. Ottimi come sostituto di pasto o come spuntino quando sei fuori casa", categoria:"biscotti", feat:"gustosi",feat1:"30% proteine",feat2:"take away"}
    // ).subscribe(data =>{
    //   console.log(data);
    // })s
  }

  onVaiAProdotti() {
    this.router.navigate(["/prodotti"])
  }
}

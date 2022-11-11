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
    // this.prodserv.insertProdotti(this.prodserv.url+"prodotti.json",
    // {}
    // ).subscribe(data =>{
    //   console.log(data);
    // })
  }

  onVaiAProdotti() {
    this.router.navigate(["/prodotti"])
  }
}

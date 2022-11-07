import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProdottoService } from '../prodotto.service';
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  constructor(private prodserv:ProdottoService) { }

  ngOnInit(): void {
  }
  onSubmit(ngform: NgForm) {
    this.prodserv.carrello.slice(0, this.prodserv.carrello.length)
    console.log(ngform);
  }
}

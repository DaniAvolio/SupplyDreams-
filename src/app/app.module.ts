import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProdottiComponent } from './prodotti/prodotti.component';
import { CarrelloComponent } from './carrello/carrello.component';
import { LogInComponent } from './log-in/log-in.component';
import { FormsModule } from '@angular/forms';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProdottoComponent } from './prodotto/prodotto.component';
import { FiltraArrayPipe } from './filtra-array.pipe';
import { CheckoutComponent } from './checkout/checkout.component';
import { RegardsComponent } from './regards/regards.component';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule} from '@angular/common/http';
import { AccountComponent } from './account/account.component';
import { SignupComponent } from './signup/signup.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProdottiComponent,
    CarrelloComponent,
    LogInComponent,
    PageNotFoundComponent,
    ProdottoComponent,
    FiltraArrayPipe,
    CheckoutComponent,
    RegardsComponent,
    HeaderComponent,
    AccountComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

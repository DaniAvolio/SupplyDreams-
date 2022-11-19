import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import{HomeComponent} from './home/home.component'
import{ProdottiComponent} from './prodotti/prodotti.component'
import{CarrelloComponent} from './carrello/carrello.component'
import{LogInComponent} from './log-in/log-in.component'
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProdottoComponent } from './prodotto/prodotto.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { RegardsComponent } from './regards/regards.component';
import { AuthGuardService } from './auth-guard.service';
import { AccountComponent } from './account/account.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
{path: '' , component: HomeComponent},
{path: 'prodotti',component: ProdottiComponent},
{path: 'carrello',component: CarrelloComponent, canActivate:[AuthGuardService]},
{path: 'log-in',component: LogInComponent},
{path: 'signup',component: SignupComponent},
{path: 'account', component: AccountComponent, canActivate:[AuthGuardService]},
{path:"prodotti/:slug", component: ProdottoComponent},
{path:"carrello/checkout", component: CheckoutComponent},
{path:"regards", component: RegardsComponent},
{path: 'page-not-found', component: PageNotFoundComponent},
{path: '**', redirectTo: 'page-not-found'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{scrollPositionRestoration: 'top' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

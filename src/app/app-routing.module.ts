import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import{HomeComponent} from './home/home.component'
import{ProdottiComponent} from './prodotti/prodotti.component'
import{CarrelloComponent} from './carrello/carrello.component'
import{LogInComponent} from './log-in/log-in.component'
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProdottoComponent } from './prodotto/prodotto.component';

const routes: Routes = [
{path: '' , component: HomeComponent},
{path: 'prodotti',component: ProdottiComponent},
{path: 'carrello',component: CarrelloComponent},
{path: 'log-in',component: LogInComponent},
{path:"prodotti/:slug", component: ProdottoComponent},
{path: 'page-not-found', component: PageNotFoundComponent},
{path: '**', redirectTo: 'page-not-found'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

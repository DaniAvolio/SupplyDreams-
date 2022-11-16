import { Injectable } from '@angular/core';
import { Utente } from './dati/utente.data';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { LogInComponent } from './log-in/log-in.component';
@Injectable({
  providedIn: 'root'
})
export class UtenteService {
  public url= 'https://progettoangular-9c931-default-rtdb.europe-west1.firebasedatabase.app/utenti.json'
  public utenti: Utente[] = []


  constructor(private http:HttpClient) {
    this.getUtenti(this.url)
    .subscribe((data: any) =>{
      this.utenti = Object.keys(data).map((key) => {return data[key]})
    })
   }

   getUtenti(url:string){
    return this.http.get(url)
   }

   insertUtenti(url:string, data:{}){
    return this.http.post(url, data)
   }
}

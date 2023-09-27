import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Dipendente } from '../model/dipendente';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistrazioneDipendenteService {

  private baseUrl : string = "http://localhost:8771/rest/api/registrazione-dipendenti";

  constructor(private http : HttpClient) { }

  registraDipendente(dipendente : Dipendente) : Observable<any> {
    
    return this.http.post(`${this.baseUrl}/nuovo-dipendente`, dipendente);

  }

}

import { Component } from '@angular/core';
import { Dipendente } from '../model/dipendente';
import { RegistrazioneDipendenteService } from '../service/registrazione-dipendente.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrazione-dipendente',
  templateUrl: './registrazione-dipendente.component.html',
  styleUrls: ['./registrazione-dipendente.component.css']
})
export class RegistrazioneDipendenteComponent {

  dipendente : Dipendente = new Dipendente();

  constructor(private dipendenteService : RegistrazioneDipendenteService, private router : Router) {}

  onSubmit() : void {

    console.log(this.dipendente);

    this.dipendenteService.registraDipendente(this.dipendente).
    subscribe({
      next : (data) => {
        alert("registrazione avvenuta correttamente");
        console.log(data);
      },
      error: (error) => {
        console.log(error);
        alert(error.error.message);
      }
    });

  }

}

import { Component } from '@angular/core';
import { Dipendente } from '../model/dipendente';
import { RegistrazioneDipendenteService } from '../service/registrazione-dipendente.service';

@Component({
  selector: 'app-registrazione-dipendente',
  templateUrl: './registrazione-dipendente.component.html',
  styleUrls: ['./registrazione-dipendente.component.css']
})
export class RegistrazioneDipendenteComponent {

  private dipendente : Dipendente = new Dipendente();

  constructor(private dipendenteService : RegistrazioneDipendenteService) {}

}

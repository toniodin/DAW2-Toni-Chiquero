import { Evento } from './models/evento.model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'keep';
  
  listaEventos: Evento[] = [

    {titulo: "EIII", lugar: "IlerSGSFna", fecha: new Date()},
    {titulo: "Clase", lugar: "Ilerna", fecha: new Date()}

  ]
}

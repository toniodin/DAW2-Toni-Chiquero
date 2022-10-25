import { Component } from '@angular/core';

interface Dia {
  Dia:string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  septiembre = [,,,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];
  octubre = [,,,,,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];
  semana = ["Lunes","Martes","Miercoles","Jueves","Viernes","Sabado","Domingo"];
  mes = ["Septiembre","Octubre"];

  tipoDia: Dia[] = [];


  constructor() {
    // Ejemplo de respuesta de un servidor en formato JSON
    const serverJson = `[
      {"Dia": "Festivo Nacional"},
      {"Dia": "Festivo Regional"},
      {"Dia": "Festivo Local"},
      {"Dia": "Festivo Centro"},
      {"Dia": "Dia Laborable"}
    ]`;

    // Parseamos la información y la convertimos directamente en un array de "Character"
    this.tipoDia = JSON.parse(serverJson);
  }

}

import { Component, OnInit } from '@angular/core';


interface meses {

  festivos: string[];
  diasFestivos: number[];
  diasMes: number[];
  mes: string[];

}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  meses:meses[] = [];
  // septiembre = [,,,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];
  // octubre = [,,,,,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];
  semana = ["Lunes","Martes","Miercoles","Jueves","Viernes","Sabado","Domingo"];
  // mes = ["Septiembre","Octubre"];
  // tipo = ["Festivo Nacional","Festivo Regional","Festivo Local","Festivo Centro","Dia Laborable"];

  constructor() {
    // Ejemplo de respuesta de un servidor en formato JSON
    const serverJson = `[
      {"diasMes": "30", "dias[]":"[]","diasFestivos[]":"[]","mes":"septiembre"},
      {"diasMes": "31", "dias[]":"diasFestivos[],"":[],"mes":"octubre"}
    ]`;

    // Parseamos la información y la convertimos directamente en un array de "Character"
    this.meses = JSON.parse(serverJson);
  }

  ngOnInit(meses:meses):void{
    for(let i = 0; meses.diasMes;i++){
      meses.diasMes.push(i);
    }
  }

}

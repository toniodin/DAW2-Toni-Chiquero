import { Component, OnInit } from '@angular/core';


interface mes {

  diasFestivos: number[];
  dias: number;
  mes: string[];
  diasMes: any[];
  diaInicio: number;
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  meses: mes[] = [];
  semana = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"];
  festivos = ["Fiesta Nacional", "Fiesta Regional", "Fiesta Local", "Fiesta Centro"];
  mes: mes[] = [

  ];

  constructor() {
    // Ejemplo de respuesta de un servidor en formato JSON
    const serverJson = `[
      {"dias": 30, "diasFestivos": [11,29], "mes": "septiembre", "diasMes": [], "diaInicio": 3},
      {"dias": 31, "diasFestivos": [12,31], "mes": "octubre", "diasMes": [], "diaInicio": 5}
    ]`;

    this.meses = JSON.parse(serverJson);


    console.log(this.meses);
    this.rellenarDias();

  }

  rellenarDias(): void {

    for (let mes of this.meses) {
      for (let j = 0; j < mes.diaInicio; j++) {
        mes.diasMes.push(null);
      }
      for (let i = 1; i < mes.dias +1; i++) {
        mes.diasMes.push(i);
      }
    }
  }
}

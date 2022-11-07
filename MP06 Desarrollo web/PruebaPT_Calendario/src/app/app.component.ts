import { Component, OnInit } from '@angular/core';


interface mes {

  diasFestivos: number[];
  dias: number;
  mes: string[];

}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  meses: mes[] = [];
  semana = ["Lunes","Martes","Miercoles","Jueves","Viernes","Sabado","Domingo"];
  festivos = ["Fiesta Nacional", "Fiesta Regional", "Fiesta Local", "Fiesta Centro"];

  constructor() {
    // Ejemplo de respuesta de un servidor en formato JSON
    const serverJson = `[
      {"dias": 30, "diasFestivos": [], "mes": "septiembre"},
      {"dias": 31, "diasFestivos": [], "mes": "octubre"}
    ]`;

    this.meses = JSON.parse(serverJson);
    // console.log(this.meses);
  }

  rellenarDias(mes: mes): number[] {
    let diasMes: number[] = [];

    for(let i = 1; i <= mes.dias; i++){
      diasMes.push(i);
    }

    return diasMes;
  }

}

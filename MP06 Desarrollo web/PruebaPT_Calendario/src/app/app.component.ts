import { Component, OnInit } from '@angular/core';


interface mes {

  dias: number;
  mes: string;
  diasMes: any[];
  diaInicio: number;

}

interface dia {
  idDia: string;
  mes?: string[];
  diasFestivos: any;
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
  idDia: string[] = ["l","r","n","c"];
  mes: string[] = ["septiembre", "octubre"];
  dia: dia [] = [];

  constructor() {
    // Ejemplo de respuesta de un servidor en formato JSON
    const serverJson = `[
      {"dias": 30, "mes": "septiembre", "diasMes": [], "diaInicio": 3},
      {"dias": 31, "mes": "octubre", "diasMes": [], "diaInicio": 5}
    ]`;

    const serverJson2 = `[
      {"mes": "septiembre", "diasFestivos": [{ "dia": 29, "idDia": "l"}]},
      {"mes": "septiembre", "diasFestivos": [{ "dia": 11, "idDia": "r"}]},
      {"mes": "octubre", "diasFestivos": [{ "dia": 12, "idDia": "n"}]},
      {"mes": "octubre", "diasFestivos": [{ "dia": 31, "idDia": "c"}]}
    ]`;

    this.meses = JSON.parse(serverJson);
    this.dia = JSON.parse(serverJson2);


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

  // printarDias(mes:mes, dia:dia) {

  //   for (let i = 1; i < mes.diasMes.length; i++) {
  //     if(dia.diasFestivos[i].idDia === 'l' && dia.diasFestivos[i].dia == 29 && mes.mes == 'septiembre'){
  //       return 'local';
  //     }else if(dia.diasFestivos[i].idDia === 'r' && dia.diasFestivos[i].dia == 11 && mes.mes == 'septiembre'){
  //       return 'regional';
  //     }else if(dia.diasFestivos[i].idDia === 'n' && dia.diasFestivos[i].dia == 12 && mes.mes == 'octubre'){
  //       return 'nacional';
  //     }else if(dia.diasFestivos[i].idDia === 'c' && dia.diasFestivos[i].dia == 31 && mes.mes == 'octubre'){
  //       return 'centro';
  //     }
      
  //   }
  //   return '';
  // }
}

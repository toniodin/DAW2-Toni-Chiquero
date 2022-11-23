import { formatDate } from '@angular/common';
import { Component, OnInit, Input } from '@angular/core';
import { Tarea } from '../models/tarea-model';


@Component({
  selector: 'app-tarea',
  templateUrl: './tarea.component.html',
  styleUrls: ['./tarea.component.css']
})
export class TareaComponent implements OnInit {

  @Input() tareas: Tarea;
  hoy: any = formatDate(new Date(), 'yyyy/MM/dd', 'en');

  constructor() {

    this.tareas = {lista: "", img: "", titulo: "", usuarios: [{"img": "", "alt": ""}],fechaFin:new Date()}

   }

  ngOnInit(): void {
  }

  compararFechas(fechaComparar:Date){

  var fechaHoy = new Date();
  var fechaHoyFormated = formatDate(fechaHoy, 'yyyy/MM/dd', 'en');
  var fechaHoyNumber = fechaHoy.getTime();
  console.log(fechaHoyNumber);
  var fechaCompararNumber = Number(fechaComparar);
  var fechaCompararFormated = formatDate(fechaComparar, 'yyyy/MM/dd', 'en');
  // var fechaHardcoded = "2022/11/10"
  

    if(fechaHoyFormated > fechaCompararFormated && this.tareas.lista != "Finalizadas"){
      // console.log("BBC");
      return "rojo";
    }else if(fechaCompararNumber == fechaHoyNumber+1 && this.tareas.lista != "Finalizadas"){
      return "naranja";
    }else if(fechaHoyFormated > fechaCompararFormated && this.tareas.lista == "Finalizadas"){
      // console.log("BBD");
      return "verde";
    }else{
      return "gris";
    }
  }

}

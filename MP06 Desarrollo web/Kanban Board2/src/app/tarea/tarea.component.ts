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

  constructor() {
    this.tareas = {id: 0 ,lista: "", img: "", titulo: "", usuarios: [],fechaFin:new Date()}
   }

  ngOnInit(): void {
  }

  compararFechas(fechaComparar:Date){

  var fechaHoy = new Date();
  var fechaHoyRestar = new Date(fechaHoy.setDate(fechaHoy.getDate() -1));
  var fechaCompararDate = new Date(fechaComparar); 
  var fechaHoyFormated = formatDate(fechaHoy, 'yyyy/MM/dd', 'en');
  var fechaCompararFormated = formatDate(fechaComparar, 'yyyy/MM/dd', 'en');
  
    if(fechaCompararDate.getUTCDate() == fechaHoyRestar.getUTCDate() && fechaCompararDate.getUTCFullYear() == fechaHoyRestar.getUTCFullYear() && fechaCompararDate.getUTCMonth() == fechaHoyRestar.getUTCMonth() && this.tareas.lista != "Finalizadas"){
      return "naranja";
    }else if(fechaHoyFormated > fechaCompararFormated && this.tareas.lista != "Finalizadas"){
      return "rojo";
    }else if(fechaHoyFormated > fechaCompararFormated && this.tareas.lista == "Finalizadas"){
      return "verde";
    }else{
      return "gris";
    }
  }
}

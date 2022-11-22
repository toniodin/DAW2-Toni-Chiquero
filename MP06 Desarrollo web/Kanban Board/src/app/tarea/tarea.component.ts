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
  // var fechaHoy = formatDate(new Date(), 'yyyy/MM/dd', 'en')

    console.log(fechaHoy);
    if(fechaHoy.getDate() < fechaComparar.getDate() && this.tareas.lista != "Finalizadas"){
      return "rojo";
    }else if(fechaHoy.getDate() < fechaComparar.getDate() && this.tareas.lista == "Finalizadas"){
      return "verde";
    }else{
      return "gris";
    }
  }

}

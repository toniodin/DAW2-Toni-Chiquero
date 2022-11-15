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

    this.tareas = {lista: "", img: "", titulo: "", usuarios: [{"img": "", "alt": ""}],fechaFin:new Date()}

   }

  ngOnInit(): void {
  }

}

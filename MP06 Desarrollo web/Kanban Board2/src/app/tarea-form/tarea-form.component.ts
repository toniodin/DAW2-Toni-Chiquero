import { Component, OnInit, Output } from '@angular/core';
import { Tarea } from '../models/tarea-model';

@Component({
  selector: 'app-tarea-form',
  templateUrl: './tarea-form.component.html',
  styleUrls: ['./tarea-form.component.css']
})
export class TareaFormComponent implements OnInit {
  
  @Output() form: Tarea;

  constructor() { 
    this.form = {id: 0 ,lista: "", img: "", titulo: "", usuarios: [],fechaFin:new Date()}
  }

  ngOnInit(): void {
  }

}

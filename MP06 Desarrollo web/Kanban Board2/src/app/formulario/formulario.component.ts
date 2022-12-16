import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AppComponent } from '../app.component';
import { Tarea } from '../models/tarea-model';
import { Usuario } from '../models/usuario-model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent extends AppComponent{

  @Output() guardarForm: EventEmitter<string> = new EventEmitter<string>();
  @Output() cerrarForm: EventEmitter<boolean> = new EventEmitter<boolean>();
 
  tarea:Tarea = {
    id: 0,
    lista: '',
    img: null,
    titulo: '',
    usuarios: [],
    fechaFin: null
  }

  taskForm = new FormGroup({
    id: new FormControl(),
    lista: new FormControl('', [Validators.required]),
    img: new FormControl(),
    titulo: new FormControl('', [Validators.required]),
    fechaFin: new FormControl(),
    usuarios: new FormControl(),
  });

  arrUser:Usuario[] = [
    {email: "lponts@ilerna.com", img:"https://picsum.photos/100/100", nick: "test", alt:"Usuario"},
  ]

  usuVacio:Usuario[] = [];

  ngOnInit(): void{

    if(this.tareaSeleccionada != undefined){

      let fechaFormatoDate = new Date(this.tareaSeleccionada.fechaFin);

      this.taskForm.setValue({
        id:this.tareaSeleccionada.id,
        titulo:this.tareaSeleccionada.titulo,
        lista:this.tareaSeleccionada.lista,
        fechaFin:fechaFormatoDate,
        img:this.tareaSeleccionada.img,
        usuarios:this.usuVacio
      });
    }else{
      this.taskForm.setValue({
        id:this.tareas.length,
        titulo:"",
        lista:"",
        fechaFin:"",
        img:"",
        usuarios:this.usuVacio
      });
    }
  }

  onSubmit() {
    if (!this.taskForm.valid) {

    }else {     
      this.guardarForm.emit(JSON.stringify(this.taskForm.value));
      this.cerrarForm.emit(true);
    }

  }

  cancelarTareaEstado(event:boolean){
    this.cerrarForm.emit(event);
  }

  boolUsuario: boolean = true;
  addUsuario() {
    this.boolUsuario = false;
    this.usuVacio.push(this.arrUser[Math.floor(Math.random()*this.arrUser.length)])
  }

  getErrorTitulo(){
    if(this.taskForm.controls.titulo.hasError('required')){
      return 'Introduzca un titulo válido';
    }
    return "";
  }
  getErrorEstado(){
    if(this.taskForm.controls.titulo.hasError('required')){
      return 'Introduzca un estado válido';
    }
    return "";
  }

}

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

  @Output() guardarForm: EventEmitter<Tarea> = new EventEmitter<Tarea>();
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
    titulo: new FormControl('', [Validators.required]),
    estado: new FormControl('', [Validators.required]),
    fechaFin: new FormControl(),
    img: new FormControl(),
    usuarios: new FormControl(),
  });

  arrUser:Usuario[] = [

    {email: "lponts@ilerna.com", img:"https://picsum.photos/100/100", nick: "Laura", alt:"Usuario"},
    {email: "lponts@ilerna.com", img:"https://picsum.photos/100/100", nick: "Laura", alt:"Usuario"}
  ]
  ngOnInit(): void{

    if(this.tareaSeleccionada != undefined){
      this.taskForm.setValue({
        id:this.tareaSeleccionada.id,
        titulo:this.tareaSeleccionada.titulo,
        estado:this.tareaSeleccionada.lista,
        fechaFin:this.tareaSeleccionada.fechaFin,
        img:this.tareaSeleccionada.img,
        usuarios:this.arrUser
      });
    }
  }

  onSubmit() {
    if (!this.taskForm.valid) {

    }else {     
      this.tarea = {
        id:        Number(this.taskForm.value.id),
        titulo:    String(this.taskForm.value.titulo),
        lista:     String(this.taskForm.value.estado),
        fechaFin:  this.taskForm.value.fechaFin,
        img:       this.taskForm.value.img,
        usuarios:   this.arrUser,
      }
      this.guardarForm.emit(this.tarea);
      this.cerrarForm.emit(true);
    }

  }

  cancelarTareaEstado(event:boolean){
    this.cerrarForm.emit(event);
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

  // addUsuario() {
  //   this.user.emit(JSON.stringify(this.arrUser));
  // }

}

import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent extends AppComponent{

  @Output() guardarForm: EventEmitter<string> = new EventEmitter<string>();
  @Output() user: EventEmitter<string> = new EventEmitter<string>();
  @Output() cerrarForm: EventEmitter<boolean> = new EventEmitter<boolean>();
 
  

  taskForm = new FormGroup({
    titulo: new FormControl('', [Validators.required]),
    estado: new FormControl('', [Validators.required]),
    date: new FormControl(),
    url: new FormControl(),
  });

  arrUser = [];

  onSubmit() {
    if (!this.taskForm.valid) {

    }else {     
      this.guardarForm.emit(JSON.stringify(this.taskForm.value));
      this.cerrarForm.emit(true);
    }

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

  addUsuario() {
    this.user.emit(JSON.stringify(this.arrUser));
  }

  cancelarTareaEstado(event:boolean){
    this.cerrarForm.emit(event);
  }
}

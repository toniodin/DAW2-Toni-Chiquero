import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AppComponent } from '../app.component';
import { Usuario } from '../models/usuario-model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent extends AppComponent{

  @Output() guardarForm: EventEmitter<string> = new EventEmitter<string>();
  @Output() cerrarForm: EventEmitter<boolean> = new EventEmitter<boolean>();
 

  //Valores que tendrá el formulario
  taskForm = new FormGroup({
    id: new FormControl(),
    titulo: new FormControl('', [Validators.required]),
    estado: new FormControl('', [Validators.required]),
    fechaFin: new FormControl(),
    img: new FormControl(),
    usuarios: new FormControl(),
  });


  emptyUser:Usuario[] = [];

  arrUser:Usuario[] = [

    {email: "lponts@ilerna.com", img:"https://picsum.photos/100/100", nick: "Laura", alt:"Usuario"},
    {email: "lponts@ilerna.com", img:"https://picsum.photos/100/100", nick: "Erpepe", alt:"Usuario"},
    {email: "lponts@ilerna.com", img:"https://picsum.photos/100/100", nick: "Manolo", alt:"Usuario"},
    {email: "lponts@ilerna.com", img:"https://picsum.photos/100/100", nick: "Hihi", alt:"Usuario"},
  ];

  //Al abrirse el formulario seteamos los valores de este
  ngOnInit(): void{

    if(this.tareaSeleccionada != undefined){
      //Si la tarea la estamos editando la devolveremos con estos valores
      this.taskForm.setValue({

        id:this.tareaSeleccionada.id,
        titulo:this.tareaSeleccionada.titulo,
        estado:this.tareaSeleccionada.lista,
        fechaFin:this.tareaSeleccionada.fechaFin,
        img:this.tareaSeleccionada.img,
        usuarios:this.arrUser

      });

    }else{

      this.taskForm.setValue({

        id:'',
        titulo:'',
        estado:'',
        fechaFin:'',
        img:'',
        usuarios:this.emptyUser,

      });

    }
  }
  
  //al submitear el formulario le mandamos los valores del formulario a través de tarea
  onSubmit() {
    if (!this.taskForm.valid) {

    }else {     
      //Enviamos y cerramos el form simultaneamente
      this.guardarForm.emit(JSON.stringify(this.taskForm.value));
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

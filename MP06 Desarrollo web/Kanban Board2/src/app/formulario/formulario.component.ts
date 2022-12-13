import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

  @Output() guardarForm: EventEmitter<string> = new EventEmitter<string>();
  @Output() user: EventEmitter<string> = new EventEmitter<string>();

  taskForm = new FormGroup({
    titulo: new FormControl('', [Validators.required]),
    estado: new FormControl('', [Validators.required]),
    date: new FormControl('', [Validators.required]),
    url: new FormControl('', [Validators.required]),
  });

  addUser = new FormGroup({
    titulo: new FormControl('', [Validators.required]),
    estado: new FormControl('', [Validators.required]),
    date: new FormControl('', [Validators.required]),
    url: new FormControl('', [Validators.required]),
  });

  onSubmit() {
    if (!this.taskForm.valid) {

    }else {     
      this.guardarForm.emit(JSON.stringify(this.taskForm.value));
    }

  }

  addUsuario() {
    this.user.emit(JSON.stringify(this.addUser.value));
  }
}

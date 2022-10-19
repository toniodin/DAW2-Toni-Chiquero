import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  _text: string = "Sample Text";
  _disabled: boolean = true;
  _inputText: string = "";
  Nombres: string[] = ['ErPepe', 'ErMarcos', 'ErAdagi'];
  fuerza:number = 0;
  destreza:number =  0;
  inteligencia:number =  0;
  constitucion:number =  0;
  nombre:number = 0;
  datos = ["",0,0,0,0];


  botonClickado(event: any): void {
    console.log(event)
  }

  generarValoresRandom($event: any, fuerza: number, destreza: number, inteligencia: number, constitucion: number, nombre:number): void {
    this.nombre =  Math.floor(Math.random() * 3);
    this.fuerza =  Math.floor(Math.random() * 21);
    this.destreza =  Math.floor(Math.random() * 21);
    this.inteligencia =  Math.floor(Math.random() * 21);
    this.constitucion =  Math.floor(Math.random() * 21);
    //console.log(nombre);
  }

  guardar($event: any, fuerza: number, destreza: number, inteligencia: number, constitucion: number, Nombres:any, nombre:number, datos:any): void{
    this.datos = [this.Nombres[nombre],this.fuerza,this.destreza,this.inteligencia,this.constitucion];
  }

}

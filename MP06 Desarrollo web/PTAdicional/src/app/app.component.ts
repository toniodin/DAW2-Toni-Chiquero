import { Component, OnInit } from '@angular/core';

interface Imagen {
  name: string;
  nameEncontrado: string;
  estado: 'defecto' | 'girado' | 'encontrado';

}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{

  serverCharacters: Imagen[] = [];
  parejasEncontradas: number = 0;


  constructor() {
    // Ejemplo de respuesta de un servidor en formato JSON
    const serverJson = `[
      {"name": "../assets/angry.png","nameEncontrado": "../assets/party.png","estado":"defecto"},
      {"name": "../assets/happy.png","nameEncontrado": "../assets/party.png","estado":"defecto"},
      {"name": "../assets/sad.png","nameEncontrado": "../assets/party.png","estado":"defecto"},
      {"name": "../assets/smile.png","nameEncontrado": "../assets/party.png","estado":"defecto"},
      {"name": "../assets/smiling.png","nameEncontrado": "../assets/party.png","estado":"defecto"},
      {"name": "../assets/star.png","nameEncontrado": "../assets/party.png","estado":"defecto"},
      {"name": "../assets/thinking.png","nameEncontrado": "../assets/party.png","estado":"defecto"},
      {"name": "../assets/very_sad.png","nameEncontrado": "../assets/party.png","estado":"defecto"}
    ]`;
    

    // Parseamos la información y la convertimos directamente en un array de "Character"
    this.serverCharacters = JSON.parse(serverJson);
  }

  girar(imagen:Imagen): any{

    if(imagen.estado == 'defecto'){
      imagen.estado = 'girado';
    }
  }

  coincidir(imagen:Imagen): any{

  }

}

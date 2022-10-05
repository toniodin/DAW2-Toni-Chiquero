import { Component } from '@angular/core';

interface Character {
  name: string;
  strength: number;
  agility: number;
  intelligence: number;
  life: number;
  editable?: boolean;
  printar: string;
  boton: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  serverCharacters: Character[] = [];

  constructor() {
    // Ejemplo de respuesta de un servidor en formato JSON
    const serverJson = `[
      {"name": "Jugger", "strength": 18, "agility": 12, "intelligence": 6, "life": 30, "editable": false, "boton":"Edit" },
      {"name": "Pelegrin", "strength": 20, "agility": 8, "intelligence": 6, "life": 40, "editable": false, "boton":"Edit" },
      {"name": "Dorthak", "strength": 12, "agility": 18, "intelligence": 10, "life": 16, "editable": false, "boton":"Edit" },
      {"name": "Kharak", "strength": 8, "agility": 20, "intelligence": 12, "life": 14, "editable": false, "boton":"Edit" },
      {"name": "Perz", "strength": 10, "agility": 6, "intelligence": 20, "life": 10, "editable": false, "boton":"Edit" }
    ]`;

    // Parseamos la información y la convertimos directamente en un array de "Character"
    this.serverCharacters = JSON.parse(serverJson);
  }

  editar(Character:Character) {
    console.log(Character.editable);
    if(Character.editable == false){
      Character.editable = true;
      Character.boton = "Save";
    }else{
      Character.editable = false;
      Character.boton = "Edit";
    }
    Character.printar = ('"name": "' + Character.name + '"strength"' + Character.strength + '"agillity"' + Character.agility + '"intelligence"' + Character.intelligence + '"life"' + Character.life);
  }

}

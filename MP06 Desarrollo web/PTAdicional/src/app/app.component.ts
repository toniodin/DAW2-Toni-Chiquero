import { Component, OnInit } from '@angular/core';

interface Character {
  name: string;
  strength: number;
  agility: number;
  intelligence: number;
  life: number;
  editable?: boolean;
  printar: string;
  boton: string;
  mostrar:boolean;
  boton2:string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  serverCharacters: Character[] = [];
  print: string = '';
  show = [true, false];


  constructor() {
    // Ejemplo de respuesta de un servidor en formato JSON
    const serverJson = `[
      {"name": "Jugger", "strength": 18, "agility": 12, "intelligence": 6, "life": 30, "editable": false, "boton":"Edit","mostrar":true, "boton2":"Hide" },
      {"name": "Pelegrin", "strength": 20, "agility": 8, "intelligence": 6, "life": 40, "editable": false, "boton":"Edit","mostrar":true, "boton2":"Hide" },
      {"name": "Dorthak", "strength": 12, "agility": 18, "intelligence": 10, "life": 16, "editable": false, "boton":"Edit","mostrar":true, "boton2":"Hide" },
      {"name": "Kharak", "strength": 8, "agility": 20, "intelligence": 12, "life": 14, "editable": false, "boton":"Edit","mostrar":true, "boton2":"Hide" },
      {"name": "Perz", "strength": 10, "agility": 6, "intelligence": 20, "life": 10, "editable": false, "boton":"Edit","mostrar":true, "boton2":"Hide" }
    ]`;

    // Parseamos la información y la convertimos directamente en un array de "Character"
    this.serverCharacters = JSON.parse(serverJson);
  }

  editar(Character: Character, print: string): any {
    console.log(Character.editable);
    if (Character.editable == false) {
      Character.editable = true;
      Character.boton = "Save";
    } else {
      Character.editable = false;
      Character.boton = "Edit";
    }
    Character.printar = ("name: /" + Character.name + "/ strength: /" + Character.strength + "/ agillity: /" + Character.agility + " /intelligence: /" + Character.intelligence + "/ life: /" + Character.life);

    return print = JSON.stringify(Character.printar);
  }

  ngOnInit(): void{
    // this.serverCharacters.push({Character[0]});
  }

  mostrar(character:Character, print: string): any{

    if(character.mostrar == true){
      character.mostrar = false;
      character.boton2 = "Show";
    }else{
      character.mostrar = true;
      character.boton2 = "Hide";
    }

    return print = JSON.stringify("name: /" + character.name + "/ strength: /" + character.strength + "/ agillity: /" + character.agility + " /intelligence: /" + character.intelligence + "/ life: /" + character.life + "/ mostrar: /" + character.mostrar);

  }

}

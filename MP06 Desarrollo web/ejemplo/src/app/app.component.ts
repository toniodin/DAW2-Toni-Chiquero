import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  leerFormulario(json: string) {
    console.log(JSON.stringify(json));
  }
  
}

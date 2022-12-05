import { Component } from "@angular/core";

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html'
})
export class BodyComponent{
  
  protected mostrar:boolean = false;

  protected frase:any = {
    autor: 'Ben Parket',
    frase: 'Un poder conlleva una gran responsabilidad'
  }

  protected personajes: string[]=['spiderman', 'venom', 'octopus']

  protected personajesJson:any[]=[
    {
      name: 'spiderman',
      age:22
    },
    {
      name: 'venom',
      age:25
    }
  ]
}

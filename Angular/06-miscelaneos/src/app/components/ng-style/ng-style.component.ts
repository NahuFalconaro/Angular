import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  template: `

    <p [ngStyle]="{'color':'blue', 'font-size':tamanio+'px'}">
        ngStyle color blue, con el tamanio de la variable
    </p>
    <p [style.fontSize.px]="tamanio">
      Hola mundo esta es una etiqueta
    </p>

    <button class="btn btn-primary" (click)="tamanio = tamanio + 10">
      <i class="fa fa-plus"></i>
    </button>
    <button class="btn btn-primary" (click)="tamanio = tamanio - 10">
      <i class="fa fa-minus"></i>
    </button>
  `,
  styles: []
})
export class NgStyleComponent implements OnInit {

  tamanio:number = 10;

  constructor() { }

  ngOnInit(): void {
  }

}

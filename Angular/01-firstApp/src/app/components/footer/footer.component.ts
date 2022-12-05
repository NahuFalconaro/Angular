import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  protected anio:number;

  constructor() { 
    this.anio = new Date().getFullYear() + 1;
  }


}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre: string = 'Capitan America';
  nombre2: string = 'naHUEl FaLCOnaRO';
  arreglo: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  PI: number = Math.PI;
  porcentaje: number = 0.234;
  salario: number = 1234.5;
  valorPromesa = new Promise<String>(resolve => {
    setTimeout(() => {
      resolve('llego la data, el resolve es si funciona, reject si la promesa no anda y te muestra error por consola')
    }, 4500);
  })
  fecha: Date = new Date();
  videoUrl: string = 'https://www.youtube.com/embed/7JsOhtl_zG4';
  verPass: boolean = true;


  objecto = {
    nombre: 'nahuel',
    edad: 23,
    direccion: {
      tandil: 'belgrano 1242',
      azul: 'misiones 687'
    }
  }
}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalizado'
})
export class CapitalizadoPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    console.log('...args, son los argumentos que vienen desps del nombre del pipe, ejemplo, capitalizado:arg1:arg2:arg3');
    value = value.toLowerCase();
    let nombres = value.split(' ');
    nombres = nombres.map(n=>{
      return n[0].toUpperCase() + n.substring(1);//substring empieza desde la las otras letras
    })
    return nombres.join(' ');
  }

}

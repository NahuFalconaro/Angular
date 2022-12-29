import { Pipe, PipeTransform } from '@angular/core';
import { Lista } from '../models/lista-model';

@Pipe({
  name: 'filtroCompletar',
  pure: false //cada vez que se cambie algo donde puse el pipe, sea donde sea que este el componente, lo activa
})
export class FiltroCompletarPipe implements PipeTransform {

  transform(listas: Lista[], completada: boolean): Lista[] { 
    return listas.filter((l)=>{
      return l.completada === completada;
    })
  }
}

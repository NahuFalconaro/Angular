import { NgModule } from '@angular/core';
import { FiltroCompletarPipe } from './filtro-completar.pipe';


@NgModule({
  declarations: [
    FiltroCompletarPipe
  ],
  exports:[
    FiltroCompletarPipe
  ]
})
export class PipesModule { }

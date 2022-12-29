import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';//trabe el ngIf, ngFor, y demas directivas y cosas de angular
import { ListsComponent } from './lists/lists.component';
import { IonicModule } from '@ionic/angular';
import { PipesModule } from '../pipes/pipes.module';



@NgModule({
  declarations: [
    ListsComponent
  ],//van los componentes que utiliza la app, si es el app.module, irian todos los componentes hijos
  exports:[
    ListsComponent
  ],//todas las cosas que son propias de este modulo, y exporta lo que quiera usar en otro modulo,
  //es decir, si quiero utilizar el componente listas en otro modulo, exporto ese componente
  imports: [
    CommonModule,
    IonicModule,
    PipesModule
  ]
})
export class ComponentsModule { }

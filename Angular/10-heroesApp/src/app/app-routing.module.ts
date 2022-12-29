import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroeComponent } from './pages/heroe/heroe.component';
import { HeroesComponent } from './pages/heroes/heroes.component';

const routes:Routes = [
  {path: 'heroe/:id', component: HeroeComponent},
  {path: 'heroes', component:HeroesComponent},
  {path: '**', pathMatch:'full', redirectTo:'heroes'},
  {path: 'producto', loadChildren: ()=> import('./productos/productos.module').then(m => m.ProductosModule)}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }

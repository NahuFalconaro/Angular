import { Routes } from '@angular/router';
import { UsuarioDetalleComponent } from './usuario-detalle.component';
import { UsuarioEditarComponent } from './usuario-editar.component';
import { UsuarioNuevoComponent } from './usuario-nuevo.component';

export const USER_ROUTES: Routes = [
  {path:'nuevo', component: UsuarioNuevoComponent},//usuario/:id/nuevo
  {path:'editar', component: UsuarioEditarComponent},
  {path:'detalle', component: UsuarioDetalleComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'usuario'}
]

import { RouterModule , Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HomeComponent } from './components/home/home.component';

const ROUTES: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'about', component: AboutComponent},
  { path: 'heroes', component: HeroesComponent},
  { path: 'heroe/:id', component: HeroeComponent},
  { path: 'buscar/:nombre', component: BuscadorComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'home'}
]

export const ROUTING = RouterModule.forRoot(ROUTES);
//export const ROUTING2 = RouterModule.forRoot(ROUTES, {useHash: true});

/* 
    Routing: path: localhost/home
    Routing2: path: localhost/#/home
*/

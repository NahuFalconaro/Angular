import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService } from 'src/app/services/heroes.service';
import { Heroe } from 'src/app/utils/interfaces';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

  heroes:Heroe[] =[]
  termino:string = '';
  constructor(private _activateRoute:ActivatedRoute, private _heroesService:HeroesService, private _router:Router) {

   }

  ngOnInit(): void {
    this._activateRoute.params.subscribe(params=>{
      this.termino = params['nombre'];
      this.heroes = this._heroesService.buscarHeroes(this.termino);
    })
  }
  verHeroe(i:number){
    this._router.navigate(['/heroe',i])
  }

}

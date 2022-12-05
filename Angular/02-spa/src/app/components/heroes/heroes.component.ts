import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeroesService } from 'src/app/services/heroes.service';
import { Heroe } from '../../utils/interfaces'


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes:Heroe[] = [];
  
  //ngOnit es para cuando la pagina ya esta renderizada
  constructor(private _heroesService:HeroesService, private _router:Router) { 

  }
//EL constructor se ejecuta antes del ngOnInit
  ngOnInit(): void {
    this.heroes = this._heroesService.getHeroes();//traigo los heroes del service
    console.log(this.heroes);
    
  }

  verHeroe(i:number){
    this._router.navigate(['/heroe',i])
  }

}

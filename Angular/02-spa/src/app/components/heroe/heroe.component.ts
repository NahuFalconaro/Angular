import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from 'src/app/services/heroes.service';
import { Heroe } from 'src/app/utils/interfaces';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {
  
  heroe:Heroe = {
    nombre: '',
    img:'',
    aparicion:'',
    bio:'',
    casa:''
  };

  constructor(private _activateRoute:ActivatedRoute, private _heroesService:HeroesService) { 

    this._activateRoute.params.subscribe(params=>{
      //console.log(params['id'])//o params.id <- nombre definido en routes.ts;
      this.heroe = this._heroesService.getHeroe(params['id']);
    })
  }

  ngOnInit(): void {
  }


}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario',
  templateUrl: `./usuario.component.html`,
  styles: []
})
export class UsuarioComponent implements OnInit {


  constructor(private _activateRoute:ActivatedRoute) {
    this._activateRoute.params.subscribe(p=>{
      console.log(p, 'RUTA PADRE');
      
    })
   }

  ngOnInit(): void {
  }

}

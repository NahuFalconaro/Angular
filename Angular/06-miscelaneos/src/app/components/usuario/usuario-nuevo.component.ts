import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario-nuevo',
  template: `<p>usuario nuevo p</p>`,
  styles: []
})
export class UsuarioNuevoComponent implements OnInit {

  constructor(private _activateRoute:ActivatedRoute) {
    this._activateRoute.parent?.params.subscribe(p=>{
      console.log(p, 'RUTA USER NUEVO');
    })
   }
   
  ngOnInit(): void {
  }

}

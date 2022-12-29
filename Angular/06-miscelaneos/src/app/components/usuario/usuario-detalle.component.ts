import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario-detalle',
  template: `<p>usuario detralle</p>`,
  styles: []
})
export class UsuarioDetalleComponent implements OnInit {

  constructor(private _activateRoute:ActivatedRoute) {
    this._activateRoute.parent?.params.subscribe(p=>{
      console.log(p, 'RUTA USER NUEVO');
    })
   }
   
  ngOnInit(): void {
  }

}

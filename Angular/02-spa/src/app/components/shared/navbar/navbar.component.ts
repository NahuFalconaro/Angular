import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private _router:Router) { }

  ngOnInit(): void {
  }

  buscarHeroe(heroe:string){
    console.log(heroe);
    //redireccionar a una nueva pantalla
    this._router.navigate(['/buscar', heroe]);
  }
}

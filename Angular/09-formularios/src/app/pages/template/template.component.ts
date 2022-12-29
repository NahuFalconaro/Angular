import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PaisService } from 'src/app/services/pais.service';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  user = {
    name:'',
    lastName: '',
    email: '',
    pais: ''
  }

  paises:any[]=[];

  constructor(private paisService:PaisService) { }

  ngOnInit(): void {
    this.paisService.getPaises().subscribe((p)=>{
      this.paises = p;

      this.paises.unshift({
        name:'[ Seleccione Pais ]',
        code: ' '
      })
      console.log(p);
    })
  }

  guardar(f: NgForm) {
    if(f.invalid){
      Object.values(f.controls).forEach(c=>{
        console.log(c);
        c.markAsTouched();
        
      })
      return;
    }
  }


}

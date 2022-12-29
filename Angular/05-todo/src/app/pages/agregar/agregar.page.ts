import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListaItem } from 'src/app/models/lista-item.model';
import { Lista } from 'src/app/models/lista-model';
import { DeseosService } from 'src/app/services/deseos.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.page.html',
  styleUrls: ['./agregar.page.scss'],
})
export class AgregarPage implements OnInit {

  lista!:Lista;
  nombreItem:string = '';
  constructor(private deseosService: DeseosService, private _router: ActivatedRoute) { 
    const listId = this._router.snapshot.paramMap.get('listaId')
    this.lista = this.deseosService.getList(listId!)!;
  }

  ngOnInit() {
  }

  addItem(){
    if(this.nombreItem.length === 0){
      return;
    }

    const nuevoItem = new ListaItem(this.nombreItem);
    this.lista?.items.push(nuevoItem);
    this.nombreItem = '';
    this.deseosService.saveStorage();
  }

  cambioCheck(item:ListaItem) {
    const pendientes = this.lista?.items.filter((iData)=>{//retorna un array con todos los items pendientes
      return !iData.completado;
    }).length;

    if(pendientes === 0){
      this.lista.terminadaEn = new Date();
      this.lista.completada = true;
    }else{
      this.lista.terminadaEn = undefined;
      this.lista.completada = false;
    }
    this.deseosService.saveStorage();
  }

  deleteItem(item:number){
    this.lista.items.splice(item, 1)//desde, cuantos borrar, seria, pos del arreglo y el item a borrar
    this.deseosService.saveStorage();
  }
}

import { Injectable } from '@angular/core';
import { Lista } from '../models/lista-model';

@Injectable({
  providedIn: 'root'
})
export class DeseosService {

  listas: Lista[] = [];

  constructor() { 
    this.loadStorage();
  }

  crearLista(titulo:string){
    const lista = new Lista(titulo);
    this.listas.push(lista)
    this.saveStorage();
    return lista.id;
  }
  deleteList(list:Lista){
    this.listas = this.listas.filter((l:Lista)=>{
      return l.id !== list.id;
    })
    this.saveStorage();
  }

  getList(id: string | number){
    
    id = Number(id);
    return this.listas.find(listData => {
      return listData.id === id;
    })
  }
  saveStorage(){
    localStorage.setItem('data', JSON.stringify(this.listas));
  }

  loadStorage(){

    this.listas = localStorage.getItem('data') !== null? JSON.parse(localStorage.getItem('data')!): [];

  }

}

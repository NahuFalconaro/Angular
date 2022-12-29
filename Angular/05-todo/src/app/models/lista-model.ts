import { ListaItem } from "./lista-item.model";

export class Lista{

  public id:number;
  public titulo:string;
  public creadaEn:Date;
  public terminadaEn?:Date;
  public completada:boolean;
  public items:ListaItem[];

  constructor(titulo:string){
    this.titulo = titulo;
    this.creadaEn = new Date();
    this.completada = false;
    this.items = [];
    this.id = new Date().getTime(); 
  }
}

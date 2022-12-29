export class ListaItem{

  public descripcion:string;
  public completado:boolean;

  constructor(descripcion:string){
    this.descripcion = descripcion;
    this.completado = false;
  }

}

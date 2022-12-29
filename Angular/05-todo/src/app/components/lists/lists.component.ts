import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, IonList } from '@ionic/angular';
import { Lista } from 'src/app/models/lista-model';
import { DeseosService } from 'src/app/services/deseos.service';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.scss'],
})
export class ListsComponent implements OnInit {

  @Input() terminada:boolean = true;
  @ViewChild( IonList) lista!: IonList;
  listas:Lista[] = [];
  constructor(public deseosService: DeseosService,
    private _router:Router,
    private alertController: AlertController) { 
      this.listas = deseosService.listas;
    }

  ngOnInit() {}

  goToList(lista: Lista) {
    if(this.terminada){
      this._router.navigateByUrl(`/tabs/tab2/agregar/${lista.id}`)
    }else{
      this._router.navigateByUrl(`/tabs/tab1/agregar/${lista.id}`)
    }
  }

  deleteList(lista:Lista){
    this.deseosService.deleteList(lista);
  }

  async editTitle(lista:Lista){
    const alert = await this.alertController.create({
      header: 'Editar lista',
      inputs:[
        {
          name:'titulo',
          type:'text',
          value: lista.titulo,
          placeholder:'Nombre de la lista'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: (data) => {
            console.log('Cancelar');
            this.lista.closeSlidingItems();
          }
        },
        {
          text: 'Crear',
          handler: (data) => {
            if(data.titulo.length === 0 ) return;
            lista.titulo = data.titulo;
            this.lista.closeSlidingItems();
            this.deseosService.saveStorage()
          },
        },
      ],
    });

    await alert.present();
  }
}

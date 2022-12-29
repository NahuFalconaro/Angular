import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { DeseosService } from 'src/app/services/deseos.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  handlerMessage = '';
  constructor(public deseosService: DeseosService,
    private _router: Router,
    private alertController: AlertController) {
  }

  async addList() {

    const alert = await this.alertController.create({
      header: 'Nueva lista',
      inputs:[
        {
          name:'titulo',
          type:'text',
          placeholder:'Nombre de la lista'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            this.handlerMessage = 'Alert canceled';
          },
        },
        {
          text: 'Crear',
          handler: (data) => {
            if(data.titulo.length === 0 ) return;
            this.handlerMessage = 'List confirmed';
            const listId = this.deseosService.crearLista(data.titulo)
            this._router.navigateByUrl(`/tabs/tab1/agregar/${listId}`)
          },
        },
      ],
    });

    await alert.present();
  }

}

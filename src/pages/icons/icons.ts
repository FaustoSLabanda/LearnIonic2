import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-icons',
  templateUrl: 'icons.html'
})
export class IconsPage {
  searchQuery: string = '';
  icons: any[] = [];
  constructor(public navCtrl: NavController) {
    this.initializeItems();
  }

  initializeItems() {
    this.icons = [
      { icon: 'add', name: 'add', des: 'Añadir' },
      { icon: 'albums', name: 'albums', des: 'Album' },
      { icon: 'alarm', name: 'alarm', des: 'Alarma' },
      { icon: 'alert', name: 'alert', des: 'Alerta' },
      { icon: 'american-football', name: 'american-football', des: 'Balón' },
      { icon: 'analytics', name: 'analytics', des: 'Analitica' },
      { icon: 'logo-android', name: 'logo-android', des: 'Android' },
      { icon: 'logo-angular', name: 'logo-angular', des: 'Angular' },
      { icon: 'aperture', name: 'aperture', des: 'Objetivo' },
      { icon: 'logo-apple', name: 'logo-apple', des: 'Apple' },
      { icon: 'apps', name: 'apps', des: 'Apps' },
      { icon: 'appstore', name: 'appstore', des: 'App Store' },
      { icon: 'analytics', name: 'analytics', des: 'Analitica' },
      { icon: 'archive', name: 'archive', des: 'Descargar' },
      { icon: 'at', name: 'at', des: 'Aroba' },
      { icon: 'attach', name: 'attach', des: 'Adjuntar' },
      { icon: 'backspace', name: 'backspace', des: 'Back Space' },
      { icon: 'basket', name: 'basket', des: 'Cesta' },
      { icon: 'basketball', name: 'basketball', des: 'Baloncesto' },
      { icon: 'battery-charging', name: 'battery-charging | -dead | -full', des: 'Bateria' },
      { icon: 'beer', name: 'beer', des: 'Cerveza' },
      { icon: 'bicycle', name: 'bicycle', des: 'Bicicleta' },
      { icon: 'bluetooth', name: 'bluetooth', des: 'Bluetooth' },
      { icon: 'bookmark', name: 'bookmark', des: 'Marca' },
      { icon: 'book', name: 'book', des: 'Libro' },
      { icon: 'cart', name: 'cart', des: 'Carrito' },
      { icon: 'chatbubbles', name: 'chatbubbles', des: 'Chat' },
      { icon: 'logo-chrome', name: 'logo-chrome', des: 'Chrome' },
    ];
  }

  getItems(ev: any) {
    this.initializeItems();
    let val = ev.target.value;

    if (val && val.trim() != '') {
      this.icons = this.icons.filter((item) => {
        return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1 || item.des.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

}

import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Camera } from '@ionic-native/camera';
//import { Camera } from '@ionic-native/camera';

@Component({
    selector: 'page-form',
    templateUrl: 'camara.html'
})

export class CamaraPage {
    public base64Image: string;
    constructor(public navCtrl: NavController, private camera: Camera) {

    }

    takePicture() {
        this.camera.getPicture({
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            targetWidth: 1000,
            targetHeight: 1000
        }).then((img) => {
            this.base64Image = "data:image/jpeg;base64," + img;
        }, (err) => {
            console.log(err);
        });
    }
    /*options:CameraOptions={
          quality:100,
          destinationType:this.camara.DestinationType.DATA_URL,
          encodingType:this.camara.EncodingType.JPEG,
          mediaType: this.camara.MediaType.PICTURE
    }
  
    this.camara.getPicture(options).then((imagenData)=>{
       let base64Image = 'data:image/jpeg;base64,' + imagenData;
    });*/


}

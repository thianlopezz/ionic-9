import { Component, OnInit, Input } from "@angular/core";
import { ModalController, NavParams, AlertController } from "@ionic/angular";
import { CameraOptions, Camera } from "@ionic-native/camera/ngx";
import {
  ImagePicker,
  ImagePickerOptions,
  OutputType
} from "@ionic-native/image-picker/ngx";

@Component({
  selector: "app-producto-form",
  templateUrl: "./producto-form.component.html",
  styleUrls: ["./producto-form.component.scss"]
})
export class ProductoFormComponent implements OnInit {
  categorias = ["TECNOLOGIA", "HOGAR", "BELLEZA"];

  @Input() producto: any = {};

  constructor(
    public modalController: ModalController,
    navParams: NavParams,
    private camera: Camera,
    private imagePicker: ImagePicker,
    public alertController: AlertController
  ) {
    this.producto = navParams.get("producto");
  }

  ngOnInit() {}

  guardar() {
    this.modalController.dismiss({ producto: this.producto });
  }

  ejecutarCamara() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    };

    this.camera.getPicture(options).then(
      imageData => {
        // imageData is either a base64 encoded string or a file URI
        // If it's base64 (DATA_URL):
        this.producto.urlFoto = "data:image/jpeg;base64," + imageData;
      },
      err => {
        // Handle error
      }
    );
  }

  ejecutarPicker() {
    debugger;
    const options: ImagePickerOptions = {
      maximumImagesCount: 1,
      outputType: OutputType.DATA_URL
    };
    this.imagePicker.getPictures(options).then(
      results => {
        // for (var i = 0; i < results.length; i++) {
        //   console.log("Image URI: " + results[i]);
        // }
        this.producto.urlFoto = "data:image/jpeg;base64," + results[0];
      },
      err => {
        console.log(err);
        this.presentAlert(JSON.stringify(err));
      }
    );
  }

  async presentAlert(mensaje) {
    const alert = await this.alertController.create({
      header: "Alert",
      subHeader: "Subtitle",
      message: mensaje,
      buttons: ["OK"]
    });

    await alert.present();
  }
}

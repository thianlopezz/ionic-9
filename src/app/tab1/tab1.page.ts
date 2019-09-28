import { Component } from "@angular/core";
import { ModalController, ToastController } from "@ionic/angular";
import { ProductoFormComponent } from "../components/producto-form/producto-form.component";
import { ProductoService } from "../services/producto.service";

@Component({
  selector: "app-tab1",
  templateUrl: "tab1.page.html",
  styleUrls: ["tab1.page.scss"]
})
export class Tab1Page {
  productos = [];

  loading = false;

  constructor(
    public modalController: ModalController,
    public toastController: ToastController,
    private pruductoService: ProductoService
  ) {}

  ionViewWillEnter() {
    this.pruductoService.getProductos().subscribe((response: any) => {
      this.productos = response.productos;
    });
  }

  onProductoClick(params) {
    const { producto, accion } = params;

    if (accion == "U") {
      this.showForm(producto);
    } else if (accion == "D") {
      // logica de eliminar
      let indice = this.productos.findIndex(
        productoFind => productoFind._id == producto._id
      );

      this.productos.splice(indice, 1);

      this.presentToast("Eliminacion correcta", 4000);
    }

    // debugger;
    // console.log("Informacion desde hijo");
    // console.log(producto);
  }

  async showForm(producto?) {
    const modal = await this.modalController.create({
      component: ProductoFormComponent,
      componentProps: {
        producto: producto || {}
      }
    });
    await modal.present();

    const { data } = await modal.onWillDismiss();

    this.loading = true;

    setTimeout(() => {
      if (data.producto._id) {
        let indice = this.productos.findIndex(
          productoFind => productoFind._id == data.producto._id
        );

        this.productos[indice] = data.producto;

        this.presentToast("Modificacion correcta");
      } else {
        this.productos.push({
          ...data.producto,
          _id: this.productos.length + 1
        });

        this.presentToast("Insercion correcta");
      }

      this.loading = false;
    }, 4000);
  }

  async presentToast(mensaje, duracion = 2000) {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: duracion
    });
    toast.present();
  }
}

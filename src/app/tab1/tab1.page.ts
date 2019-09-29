import { Component } from "@angular/core";
import {
  ModalController,
  ToastController,
  NavController
} from "@ionic/angular";
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
    private productoService: ProductoService,
    private navController: NavController
  ) {}

  ionViewWillEnter() {
    this.getProductos();
  }

  getProductos() {
    this.loading = true;
    this.productoService.getProductos().subscribe(
      (response: any) => {
        this.productos = response.productos;
        this.loading = false;
      },
      error => {
        this.loading = false;
        this.presentToast("No se pudo completar!");
      }
    );
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
    } else {
      debugger;
      this.navController.navigateForward("/tabs/tab1/detalle/" + producto._id);
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

    if (data.producto._id) {
      this.updateProducto(data.producto);
    } else {
      this.insertProducto(data.producto);
    }

    this.loading = false;
  }

  async presentToast(mensaje, duracion = 2000) {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: duracion
    });
    toast.present();
  }

  insertProducto(producto) {
    this.productoService.insertProducto(producto).subscribe(
      (response: any) => {
        debugger;
        if (response.success) {
          this.presentToast("Ingresado correctamente");
          this.getProductos();
        } else {
          this.presentToast("No se pudo completar!");
        }
      },
      error => {
        debugger;
        this.presentToast("No se pudo completar!");
      }
    );
  }

  updateProducto(producto) {
    this.productoService.updateProducto(producto).subscribe(
      (response: any) => {
        if (response.success) {
          this.presentToast("Actualizado correctamente");
          this.getProductos();
        } else {
          this.presentToast("No se pudo completar!");
        }
      },
      error => {
        this.presentToast("No se pudo completar!");
      }
    );
  }
}

import { Component } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { ProductoFormComponent } from "../components/producto-form/producto-form.component";

@Component({
  selector: "app-tab1",
  templateUrl: "tab1.page.html",
  styleUrls: ["tab1.page.scss"]
})
export class Tab1Page {
  productos = [
    {
      _id: 1,
      descripcion: "Computadora",
      precio: 1200,
      categoria: "TECNOLOGIA",
      // feCreacion: new Date(),
      stock: 4,
      urlFoto:
        "https://i2k7m8f5.stackpathcdn.com/7962-large_default/computadora-gamer-i3-7100-essential-de-8gb-1tb.jpg"
    },
    {
      _id: 2,
      descripcion: "Computadora 2",
      precio: 1200,
      categoria: "TECNOLOGIA",
      // feCreacion: new Date(),
      stock: 4,
      urlFoto:
        "https://i2k7m8f5.stackpathcdn.com/7962-large_default/computadora-gamer-i3-7100-essential-de-8gb-1tb.jpg"
    },
    {
      _id: 3,
      descripcion: "Computadora 3",
      precio: 1200,
      categoria: "TECNOLOGIA",
      // feCreacion: new Date(),
      stock: 4,
      urlFoto:
        "https://i2k7m8f5.stackpathcdn.com/7962-large_default/computadora-gamer-i3-7100-essential-de-8gb-1tb.jpg"
    }
  ];

  constructor(public modalController: ModalController) {}

  onProductoClick(producto) {
    // debugger;
    // console.log("Informacion desde hijo");
    // console.log(producto);
    this.showForm(producto);
  }

  async showForm(producto?) {
    const modal = await this.modalController.create({
      component: ProductoFormComponent,
      componentProps: {
        producto
      }
    });
    await modal.present();

    const { data } = await modal.onWillDismiss();
    if (data.producto._id) {
      let indice = this.productos.findIndex(
        productoFind => productoFind._id == data.producto._id
      );

      this.productos[indice] = data.producto;
    } else {
      this.productos.push({ ...data.producto, _id: this.productos.length + 1 });
    }
  }
}

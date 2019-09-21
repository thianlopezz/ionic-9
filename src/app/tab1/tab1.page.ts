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
      descripcion: "Computadora",
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
    debugger;
    console.log("Informacion desde hijo");
    console.log(producto);
  }

  async showForm() {
    const modal = await this.modalController.create({
      component: ProductoFormComponent
    });
    await modal.present();

    const { data } = await modal.onWillDismiss();
    this.productos.push(data.producto);
  }
}

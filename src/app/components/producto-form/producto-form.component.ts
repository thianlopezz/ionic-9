import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";

@Component({
  selector: "app-producto-form",
  templateUrl: "./producto-form.component.html",
  styleUrls: ["./producto-form.component.scss"]
})
export class ProductoFormComponent implements OnInit {
  categorias = ["TECNOLOGIA", "HOGAR", "BELLEZA"];

  producto = {};

  constructor(public modalController: ModalController) {}

  ngOnInit() {}

  guardar() {
    this.modalController.dismiss({ producto: this.producto });
  }
}

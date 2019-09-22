import { Component, OnInit, Input } from "@angular/core";
import { ModalController, NavParams } from "@ionic/angular";

@Component({
  selector: "app-producto-form",
  templateUrl: "./producto-form.component.html",
  styleUrls: ["./producto-form.component.scss"]
})
export class ProductoFormComponent implements OnInit {
  categorias = ["TECNOLOGIA", "HOGAR", "BELLEZA"];

  @Input() producto = {};

  constructor(public modalController: ModalController, navParams: NavParams) {
    this.producto = navParams.get("producto");
  }

  ngOnInit() {}

  guardar() {
    this.modalController.dismiss({ producto: this.producto });
  }
}

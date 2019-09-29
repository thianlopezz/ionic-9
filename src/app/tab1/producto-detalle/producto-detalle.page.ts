import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ProductoService } from "src/app/services/producto.service";

@Component({
  selector: "app-producto-detalle",
  templateUrl: "./producto-detalle.page.html",
  styleUrls: ["./producto-detalle.page.scss"]
})
export class ProductoDetallePage implements OnInit {
  producto: any = {};

  constructor(
    private activatedRoute: ActivatedRoute,
    private productoService: ProductoService
  ) {}

  ngOnInit() {}

  ionViewWillEnter() {
    let idProducto = this.activatedRoute.snapshot.paramMap.get("idProducto");
    this.productoService
      .getProductoById(idProducto)
      .subscribe((response: any) => {
        this.producto = response.producto;
      });
  }
}

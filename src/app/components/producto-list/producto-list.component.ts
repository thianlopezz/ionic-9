import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-producto-list",
  templateUrl: "./producto-list.component.html",
  styleUrls: ["./producto-list.component.scss"]
})
export class ProductoListComponent implements OnInit {
  @Input() _productos = [];
  @Output() _productoClick = new EventEmitter<any>();

  constructor() {}

  ngOnInit() {}

  productoClick(producto, accion) {
    this._productoClick.next({ producto, accion });
  }
}

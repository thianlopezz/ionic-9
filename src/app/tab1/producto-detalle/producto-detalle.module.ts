import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";

import { IonicModule } from "@ionic/angular";

import { ProductoDetallePage } from "./producto-detalle.page";
// import { ProductoListComponent } from "src/app/components/producto-list/producto-list.component";
import { Tab1PageModule } from "../tab1.module";

const routes: Routes = [
  {
    path: "",
    component: ProductoDetallePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
    // Tab1PageModule
  ],
  declarations: [ProductoDetallePage]
})
export class ProductoDetallePageModule {}

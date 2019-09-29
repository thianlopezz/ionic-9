import { IonicModule } from "@ionic/angular";
import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Tab1Page } from "./tab1.page";
import { ProductoListComponent } from "../components/producto-list/producto-list.component";
import { ProductoFormComponent } from "../components/producto-form/producto-form.component";

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: "", component: Tab1Page }])
  ],
  entryComponents: [ProductoFormComponent],
  declarations: [Tab1Page, ProductoListComponent, ProductoFormComponent],
  exports: [ProductoListComponent]
})
export class Tab1PageModule {}

import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { GlobalConfigService } from "./global-config.service";

@Injectable({
  providedIn: "root"
})
export class ProductoService {
  constructor(
    private http: HttpClient,
    private globalConfig: GlobalConfigService
  ) {}

  getProductos() {
    return this.http.get(this.globalConfig.getUrl() + "/productos");
  }

  insertProducto(producto) {
    return this.http.post(this.globalConfig.getUrl() + "/productos", producto);
  }

  updateProducto(producto) {
    return this.http.put(this.globalConfig.getUrl() + "/productos", producto);
  }
}

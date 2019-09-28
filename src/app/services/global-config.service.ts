import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class GlobalConfigService {
  constructor() {}

  getUrl() {
    return "https://io-api9.herokuapp.com";
  }
}

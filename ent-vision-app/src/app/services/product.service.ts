import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServiceConstant } from './constant';
@Injectable({
  providedIn: 'root'
})

export class ProductService {

  constructor(private http: HttpClient, private serviceConstant: ServiceConstant) { }

  getProduct() {
    return this.http.get(this.serviceConstant.productUrl);
  }

  getProductByField(columnName: string, value: string) {
    return this.http.get(this.serviceConstant.productUrl, {params: {columnName, value}});
  }
}

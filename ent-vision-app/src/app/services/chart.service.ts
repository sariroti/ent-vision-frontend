import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ServiceConstant } from './constant';
@Injectable({
  providedIn: 'root'
})
export class ChartService {

  constructor(private http: HttpClient, private serviceConstant: ServiceConstant) { }


 getTotalProductByCategories() {
    return this.http.get(this.serviceConstant.productByCategoryChartUrl)
  }
}

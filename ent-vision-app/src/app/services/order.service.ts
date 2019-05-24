import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ServiceConstant } from './constant';
import { Order } from '../models/order.model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient, private serviceConstant: ServiceConstant) { }
  httpOptions = {
    headers: new HttpHeaders({
    'Content-Type': 'application/json'
    })
    };
  createOrder(order: Order) {
    console.log(JSON.stringify({order}));
    return this.http.post(this.serviceConstant.orderUrl, {order}, this.httpOptions);
  }

}

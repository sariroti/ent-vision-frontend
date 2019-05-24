import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Order } from '../models/order.model';
import { NgForm } from '@angular/forms';
import { OrderDetails } from '../models/order-details.model';
import { OrderService } from '../services/order.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  products: any[];
  productsList: any[];
  selectedProductName: string;
  selectedProduct: any;
  order: Order;
  orderSubmit: Order;
  orderDetails: OrderDetails[];
  constructor(private productService: ProductService, private orderService: OrderService, private router: Router) { }

  ngOnInit() {
    this.selectedProductName = '';
    this.productsList = [];
    this.order = new Order();
    this.orderSubmit = new Order();
    this.order.CustomerID = '1';
    this.order.OrderDetails = [];
    this.orderDetails = [];
    this.productService.getProduct()
      .subscribe((data: any) => {
        this.products = data;
      });
  }

  onChangeProduct(index: number) {
    this.selectedProductName = this.products[index].ProductName;
    this.selectedProduct = this.products[index];

  }

  addProduct() {
    this.selectedProduct.Quantity = this.order.Quantity;
    this.order.OrderDetails.push(this.selectedProduct);
  }

  submit(form: NgForm, event: Event) {
    this.orderSubmit = form.form.value;

    this.orderSubmit.RequiredDate =
      this.orderSubmit.RequiredDateObject.year + '-' +
      this.orderSubmit.RequiredDateObject.month + '-' +
      this.orderSubmit.RequiredDateObject.day;
    delete this.orderSubmit.RequiredDateObject;
    delete this.orderSubmit.Quantity;
    this.orderSubmit.OrderDetails = [];
    for (const od of this.order.OrderDetails) {
      const orderDetail = new OrderDetails();
      orderDetail.PartNumber = od.PartNumber;
      orderDetail.Quantity = od.Quantity;

      this.orderSubmit.OrderDetails.push(orderDetail);
  }
    this.orderService.createOrder(this.orderSubmit)
      .subscribe((data: any) => {
        console.log(data);
        if (data === 'Success') {
            alert('Order added!');
            this.router.navigate(['/']);
        }
      });
  }
}

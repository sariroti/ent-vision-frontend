import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


import { HttpClientModule } from '@angular/common/http';
import { OrdersComponent } from './orders/orders.component';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
  { path : '', component: ProductsComponent},
  { path: 'orders', component: OrdersComponent },
];


@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    OrdersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

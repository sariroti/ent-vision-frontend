import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private productService: ProductService) { }
  products: any[];
  selectedFieldFilterValue: string;
  selectedFieldFilterDisplay: string;
  fieldFilterValue: string;
  ngOnInit() {
    this.selectedFieldFilterDisplay = 'Category Name';
    this.selectedFieldFilterValue = 'categoryName';
    this.fieldFilterValue = '';
    this.productService.getProduct()
      .subscribe((data: any) => {
        this.products = data;
      });
  }

  onChangeFieldFilter(field: string) {
    switch (field) {
      case 'categoryName':
        this.selectedFieldFilterDisplay = 'Category Name';
        break;
      case 'partNumber':
        this.selectedFieldFilterDisplay = 'Part Number';
        break;
    }
    this.selectedFieldFilterValue = field;
  }

  search() {
    if (this.fieldFilterValue === '') {
      this.productService.getProduct()
      .subscribe((data: any) => {
        this.products = data;
      });
    } else {
      this.productService.getProductByField(this.selectedFieldFilterValue, this.fieldFilterValue)
      .subscribe((data: any) => {
        this.products = data;
        console.log(data);
      });
    }
  }
}

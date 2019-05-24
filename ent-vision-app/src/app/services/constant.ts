import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
  })
export class ServiceConstant {
    public readonly baseUrl = 'http://localhost:50513/api/';
    public readonly productUrl = this.baseUrl + 'products';
    public readonly orderUrl = this.baseUrl + 'orders';
    public readonly chartUrl = this.baseUrl + 'charts';
    public readonly productByCategoryChartUrl = this.chartUrl + '/GetProductTotalByCategories';
}


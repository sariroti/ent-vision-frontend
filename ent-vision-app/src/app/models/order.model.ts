import { OrderDetails } from './order-details.model';
export class Order {
    RequiredDateObject: any;
    RequiredDate: string;
    ShipName: string;
    ShipAddress: string;
    ShipCity: string;
    ShipPostalCode: string;
    ShipCountry: string;
    CustomerID: string;
    OrderDetails: OrderDetails[];
    Quantity: number;
  }

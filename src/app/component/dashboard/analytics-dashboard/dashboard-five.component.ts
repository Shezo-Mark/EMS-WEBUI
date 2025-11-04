import { Component } from '@angular/core';
import * as chartData from 'src/app/shared/data/dashboard';
import { CountriesData } from 'countries-map';

@Component({
  selector: 'app-dashboard-five',
  templateUrl: './dashboard-five.component.html',
  styleUrls: ['./dashboard-five.component.scss'],
})
export class DashboardFiveComponent {
  //Countries Map
  public mapData: CountriesData = {
    AR: { value: 94 },
    FR: { value: 255 },
    US: { value: 456 },
  };

  public StackedBarData3 = chartData.StackedBarData3;

  ProductsData = [
    {
      Date: '10-11-21',
      Product: ['./assets/img/ecommerce/06.jpg'],
      Name: 'Sed vero et ipsum et',
      Price: '$18,900',
      PaymentMethod: 'Cash On Delivery',
      TransactionID: '#23412858169',
      Status: 'Shipped',
    },
    {
      Date: '17-01-21',
      Product: ['./assets/img/ecommerce/02.jpg'],
      Name: 'Rebum dolores at erat ipsum',
      Price: '$18,900',
      PaymentMethod: 'Cash On Delivery',
      TransactionID: '#23412863169',
      Status: 'Shipped',
    },
    {
      Date: '15-11-21',
      Product: ['./assets/img/ecommerce/01.jpg'],
      Name: 'Ipsum et sit diam ut',
      Price: '$18,900',
      PaymentMethod: 'Cash On Delivery',
      TransactionID: '#23412855841',
      Status: 'Shipped',
    },
    {
      Date: '02-11-21',
      Product: ['./assets/img/ecommerce/03.jpg'],
      Name: 'No stet eos justo voluptua',
      Price: '$18,900',
      PaymentMethod: 'Cash On Delivery',
      TransactionID: '#23412858169',
      Status: 'Shipped',
    },
    {
      Date: '12-11-21',
      Product: ['./assets/img/ecommerce/08.jpg'],
      Name: 'Eos justo nonumy stet sit',
      Price: '$18,900',
      PaymentMethod: 'Cash On Delivery',
      TransactionID: '#23412858169',
      Status: 'Shipped',
    },
    {
      Date: '15-11-21',
      Product: ['./assets/img/ecommerce/05.jpg'],
      Name: 'Diam voluptua stet invidunt sed',
      Price: '$18,900',
      PaymentMethod: 'Cash On Delivery',
      TransactionID: '#23412858169',
      Status: 'Shipped',
    },
  ];
  DeleteClick(InvoiceData: any) {
    let filterData = this.ProductsData.filter((ele) => {
      return ele.Date != InvoiceData;
    });
    this.ProductsData = filterData;
  }
}

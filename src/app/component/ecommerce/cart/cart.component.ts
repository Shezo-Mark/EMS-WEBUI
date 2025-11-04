import { Component } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent {
  SelectCountry = ['select country'];
  Countries = [
    { name: 'United States of America' },
    { name: 'Afghanistan' },
    { name: 'Albania' },
    { name: 'Andorra' },
    { name: 'Antigua and Barbuda' },
    { name: 'Australia' },
    { name: 'Armenia' },
    { name: 'Argentina' },
    { name: 'Austria' },
    { name: 'Turkmenistan' },
    { name: 'Ukraine' },
    { name: 'Thailand' },
  ];

  SelectExpirationDate = ['Select Date'];
  ExpirationDates = [
    {
      Date: 'january2025',
    },
    { Date: 'january2026' },
    { Date: 'january2027' },
    { Date: 'january2028' },
    { Date: 'january2029' },
    { Date: 'january2030' },
  ];
}

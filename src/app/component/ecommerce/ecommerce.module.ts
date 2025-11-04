import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EcommerceRoutingModule } from './ecommerce-routing.module';
import { ProductsComponent } from './products/products.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { WishListComponent } from './wish-list/wish-list.component';
import { SharedModule } from "../../shared/shared.module";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ArchwizardModule } from 'angular-archwizard';

@NgModule({
  declarations: [
    ProductsComponent,
    ProductDetailsComponent,
    CartComponent,
    CheckOutComponent,
    WishListComponent,
  ],
  imports: [
    CommonModule,
    EcommerceRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    NgSelectModule,
    ArchwizardModule
  ],
})
export class EcommerceModule {}

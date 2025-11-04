import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductsComponent } from './products/products.component';
import { WishListComponent } from './wish-list/wish-list.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'check-out',
        title: 'Adminor - check-out',
        component: CheckOutComponent,
      },
      {
        path: 'product-details',
        title: 'Adminor - Product Details',
        component: ProductDetailsComponent,
      },
      {
        path: 'products',
        title: 'Adminor - Products',
        component: ProductsComponent,
      },
      {
        path: 'cart',
        title: 'Adminor - Cart',
        component: CartComponent,
      },
      {
        path: 'wish-list',
        title: 'Adminor - Wishlist',
        component: WishListComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EcommerceRoutingModule { }

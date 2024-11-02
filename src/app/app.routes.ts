import { Routes } from '@angular/router';
import { CafeComponent } from './cafe/cafe.component';
import { ShopComponent } from './shop/shop.component';
import { CartComponent } from './cart/cart.component';

export const routes: Routes = [
  { path: 'cafe', component: CafeComponent },
  { path: 'cart', component: CartComponent },
  { path: 'shop', component: ShopComponent },
  { path: '', redirectTo: '/shop', pathMatch: 'full' },
];

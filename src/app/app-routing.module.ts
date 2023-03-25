import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './pages/shop_/shopComponents/cart/cart.component';
import { CheckoutComponent } from './pages/shop_/shopComponents/checkout/checkout.component';
import { IndexComponent } from './pages/index_/index/index.component';
import { ShopComponent } from './pages/shop_/shop/shop.component';
import { FilterCategoryComponent } from './pages/shop_/shopComponents/filter-category/filter-category.component';

const routes: Routes = [
  //redirectTo: 'index'
  { path: '',  component: IndexComponent }, // Default route to redirect to index
  { path: 'index/:myParameter', component: IndexComponent },
  { path: 'category', component: FilterCategoryComponent },
  { path: 'shop/:myParameter', component: ShopComponent },
  { path: 'cart', component: CartComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: '**', component: IndexComponent } // Fallback route, should be at the end of the list
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductDetailComponent } from './layout/product-detail/product-detail.component';

const routes: Routes = [
  {path: 'product', component: ProductDetailComponent},
  {
    path: 'product-register',
    loadChildren: './product-register/product-register.module#ProductRegisterModule'
  },
  {
    path: 'message-failed',
    loadChildren: './failed-product/failed-product.module#FailedProductModule'
  },
  {
    path: 'message-done',
    loadChildren: './done-product/done-product.module#DoneProductModule'
    
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

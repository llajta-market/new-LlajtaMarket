import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { ProductDetailComponent } from './layout/product-detail/prduct-detail.component';

const routes: Routes = [
  {
    path: 'objetivo', 
    loadChildren : './objetivo/objetivo.module#ObjetivoModule'
  },
  {
    path: 'product-register',
    loadChildren: './product-register/product-register.module#ProductRegisterModule'
  },
  {path: 'store',
  loadChildren: './store/store.module#StoreModule'},
  {
    path: 'message-failed',
    loadChildren: './failed-product/failed-product.module#FailedProductModule'
  },
  {
    path: 'message-done',
    loadChildren: './done-product/done-product.module#DoneProductModule'
    
  },
  {
    path: 'store',
    loadChildren: './store/store.module#StoreModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

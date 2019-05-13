import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductDetailComponent } from './layout/product-detail/product-detail.component';

<<<<<<< HEAD
const routes: Routes = [{
  path: 'store',
  loadChildren: './store/store.module#StoreModule'
}];
=======
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
>>>>>>> d15047de151bb80c77bc3f4d6ae44cab589b8872

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

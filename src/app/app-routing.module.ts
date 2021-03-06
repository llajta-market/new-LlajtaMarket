import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ControlPanelComponent } from './components/control-panel/control-panel.component';
import { ProductDetailComponent } from './layout/product-detail/product-detail.component';

import { RegisterComponent } from './components/user/register/register.component'
import { UsersListComponent } from './components/user/users-list/users-list.component';

const routes: Routes = [
  {
    path: 'objetivo',
    loadChildren: './objetivo/objetivo.module#ObjetivoModule'
  },
  {
    path: 'product-register',
    loadChildren: './product-register/product-register.module#ProductRegisterModule'
  },
  {
    path: 'store',
    loadChildren: './store/store.module#StoreModule'
  },
  {
    path: 'control-panel', component: ControlPanelComponent
  },
  {
    path: 'message-failed',
    loadChildren: './failed-product/failed-product.module#FailedProductModule'
  },
  {
    path: 'message-done',
    loadChildren: './done-product/done-product.module#DoneProductModule'
  },
  {
    path: 'home-client',
    loadChildren: './client/client.module#ClientModule'
  },
  {
    path: 'register-user',
    component: RegisterComponent
  },
  {
    path: 'users/:id/edit', component: RegisterComponent
  },
  {
    path: 'users', component: UsersListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

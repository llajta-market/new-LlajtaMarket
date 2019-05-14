import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MessageFailedProductComponent } from './message-failed-product/message-failed-product.component';

const routes: Routes = [
  {
    path: '',
    component: MessageFailedProductComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FailedProductRoutingModule { }

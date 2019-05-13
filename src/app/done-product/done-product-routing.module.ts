import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MessageDoneProductComponent } from './message-done-product/message-done-product.component';

const routes: Routes = [
  {
    path:'',
    component: MessageDoneProductComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DoneProductRoutingModule { }

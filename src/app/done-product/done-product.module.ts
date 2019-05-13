import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DoneProductRoutingModule } from './done-product-routing.module';
import { MessageDoneProductComponent } from './message-done-product/message-done-product.component';

@NgModule({
  declarations: [MessageDoneProductComponent],
  imports: [
    CommonModule,
    DoneProductRoutingModule
  ]
})
export class DoneProductModule { }

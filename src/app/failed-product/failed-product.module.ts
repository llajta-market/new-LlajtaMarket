import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FailedProductRoutingModule } from './failed-product-routing.module';
import { MessageFailedProductComponent } from './message-failed-product/message-failed-product.component';

@NgModule({
  declarations: [MessageFailedProductComponent],
  imports: [
    CommonModule,
    FailedProductRoutingModule
  ]
})
export class FailedProductModule { }

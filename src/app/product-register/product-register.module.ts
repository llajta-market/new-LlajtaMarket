import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRegisterRoutingModule } from './product-register-routing.module';
import { FormComponent } from './form/form.component';
import { FormsModule } from '@angular/forms';
import { ProductsService } from '../services/products.service';

@NgModule({
  declarations: [FormComponent],
  imports: [
    CommonModule,
    ProductRegisterRoutingModule,
    FormsModule
  ],
  providers: [ProductsService]
})
export class ProductRegisterModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreRoutingModule } from './store-routing.module';
import { StoreComponent } from './store.component';
import { CatalogComponent } from './catalog/catalog.component';
import { ProductsService } from './products.service';

@NgModule({
  declarations: [StoreComponent, CatalogComponent],
  imports: [
    CommonModule,
    StoreRoutingModule
  ],
providers: [ProductsService]
})
export class StoreModule { }

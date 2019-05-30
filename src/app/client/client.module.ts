import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { AppClienteComponent } from './app-cliente/app-cliente.component';
import { ProductViewComponent } from './product-view/product-view.component';
import { ClientZoneComponent } from './client-zone/client-zone.component';

@NgModule({
  declarations: [AppClienteComponent, ProductViewComponent, ClientZoneComponent],
  imports: [
    CommonModule,
    ClientRoutingModule
  ]
})
export class ClientModule { }

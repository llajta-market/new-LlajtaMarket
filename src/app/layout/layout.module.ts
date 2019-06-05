import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SidenavDirective } from './navbar/sidenav.directive';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';

import { MenuProductComponent } from './menu-product/menu-product.component';
// import { AppClienteComponent } from '../client/app-cliente/app-cliente.component';
// import { ProductViewComponent } from '../client/product-view/product-view.component';
// import { ClientZoneComponent } from '../client/client-zone/client-zone.component';
//import { ProductDetailComponent } from './product-detail/product-detail.component';

@NgModule({
  declarations: [NavbarComponent, 
                FooterComponent, 
                SidenavDirective,
                MenuProductComponent,
                // AppClienteComponent, 
                // ProductViewComponent, 
                // ClientZoneComponent
                //ProductDetailComponent
              ],
  imports: [CommonModule, RouterModule],
  exports: [NavbarComponent, FooterComponent]
})
export class LayoutModule {}

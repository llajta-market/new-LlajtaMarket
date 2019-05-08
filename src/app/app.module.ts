import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { CreateComponent } from './store/product/create/create.component';

@NgModule({
  declarations: [AppComponent, CreateComponent],
  imports: [BrowserModule, AppRoutingModule, LayoutModule],
  bootstrap: [AppComponent]
})
export class AppModule {}

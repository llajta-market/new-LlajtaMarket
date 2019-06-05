import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule} from '@angular/fire/firestore';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ControlPanelComponent} from './components/control-panel/control-panel.component';
import { LayoutModule } from './layout/layout.module';
import { environment } from 'src/environments/environment';
import { RegisterComponent } from './components/user/register/register.component';
import { FormsModule } from '@angular/forms';
// import { AppClienteComponent } from './client/app-cliente/app-cliente.component';
// import { ProductViewComponent } from './client/product-view/product-view.component';
// import { ClientZoneComponent } from './client/client-zone/client-zone.component';

@NgModule({
  declarations: [
    AppComponent,
    ControlPanelComponent,
    RegisterComponent,
    // AppClienteComponent, ProductViewComponent, ClientZoneComponent
  ],

  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase), 
    AngularFirestoreModule,
    AppRoutingModule,
    LayoutModule,
    FormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

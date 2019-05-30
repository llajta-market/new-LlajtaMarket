import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AngularFireModule} from '@angular/fire';
import { AngularFirestoreModule} from '@angular/fire/firestore';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ControlPanelComponent} from './components/control-panel/control-panel.component';
import { LayoutModule } from './layout/layout.module';
import { environment } from 'src/environments/environment';
import { RegisterComponent } from './components/user/register/register.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ControlPanelComponent,
    RegisterComponent
  ],

  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase), 
    AngularFirestoreModule,
    AppRoutingModule,
    LayoutModule,
    HttpClientModule,
    FormsModule
  ],

  bootstrap: [AppComponent]
})
export class AppModule {}

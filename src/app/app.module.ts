import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {LayoutModule} from './layout/layout.module';
import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {ControlPanelComponent} from './components/control-panel/control-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    ControlPanelComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    LayoutModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

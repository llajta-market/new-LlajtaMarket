import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
<<<<<<< HEAD
import {HttpClientModule} from '@angular/common/http';
=======
import { AngularFireModule} from '@angular/fire';
import { AngularFirestoreModule} from '@angular/fire/firestore';

>>>>>>> 14346b5253717983b92f0c046f71f0e42938a363
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [AppComponent],
<<<<<<< HEAD
  imports: [BrowserModule, AppRoutingModule, LayoutModule,HttpClientModule],
=======
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase), 
    AngularFirestoreModule,
    AppRoutingModule, 
    LayoutModule
  ],
>>>>>>> 14346b5253717983b92f0c046f71f0e42938a363
  bootstrap: [AppComponent]
})
export class AppModule {}

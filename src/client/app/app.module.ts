import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from 'angularfire2';

import { AboutModule } from './about/about.module';
import { HomeModule } from './home/home.module';
import { SharedModule } from './shared/shared.module';
import { DemoModule } from './demo/demo.module';
import { PageModule } from './page/page.module';

// Must export the config
export const firebaseConfig = {
  apiKey: 'AIzaSyCMBywkEbV3WCXdTHS1U2XR_CpAFoV-ckg',
  authDomain: 'domidex-3a279.firebaseapp.com',
  databaseURL: 'https://domidex-3a279.firebaseio.com',
  storageBucket: 'domidex-3a279.appspot.com',
  messagingSenderId: '554817672414'
};

@NgModule({
  imports: [BrowserModule, HttpModule, AppRoutingModule, AboutModule, HomeModule, DemoModule, PageModule, SharedModule.forRoot()],
  declarations: [AppComponent],
  providers: [{
    provide: APP_BASE_HREF,
    useValue: '<%= APP_BASE %>'
  }],
  bootstrap: [AppComponent]

})
export class AppModule { }

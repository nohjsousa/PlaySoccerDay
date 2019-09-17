import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { FeedPageModule } from './feed/feed.module';

//Pages
import { LoginPageModule} from './login/login.module';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: 
  [
    //Pages
    LoginPageModule,
    BrowserModule, 
    IonicModule.forRoot(), AppRoutingModule,
    //FeedPageModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

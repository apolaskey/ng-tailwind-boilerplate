import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from "@angular/fire";
import { environment } from "../environments/environment";
import { AngularFireAnalyticsModule } from "@angular/fire/analytics";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { DeviceDetectorModule } from "ngx-device-detector";
import { LoggerModule } from "ngx-logger";
import { HttpClient } from "@angular/common/http";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { LottieModule } from "ngx-lottie";
import player from "lottie-web";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DeviceDetectorModule.forRoot(),
    LoggerModule.forRoot(environment.loggerConfig),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAnalyticsModule,
    AngularFirestoreModule,
    AppRoutingModule,
    LottieModule.forRoot({player: playerFactory})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

// These are required for AOT compilation support
export function httpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

export function playerFactory() {
  return player;
}

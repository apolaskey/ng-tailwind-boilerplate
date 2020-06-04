import { Component } from '@angular/core';
import { TranslateService } from "@ngx-translate/core";
import { DeviceDetectorService } from "ngx-device-detector";
import { environment } from "@env/environment";
import * as enLang from "@assets/i18n/en.json";
import { AnimationOptions, BMCompleteEvent } from "ngx-lottie";
import * as demoAnimation from "@assets/lottie-jelly.json"
import { AnimationItem } from "lottie-web";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-tailwind-boilerplate';

  private _demoAnimationOptions: AnimationOptions = {
    animationData: demoAnimation["default"],
    autoplay: false,
    loop: false
  };

  constructor(
    private translator: TranslateService,
    private deviceDetectorService: DeviceDetectorService
  ) {
    translator.setTranslation(environment.defaultLang, enLang);
    translator.setDefaultLang(environment.defaultLang);
  }

  public getDemoAnimationOptions(): AnimationOptions {
    console.log(this._demoAnimationOptions);
    return this._demoAnimationOptions;
  }

  public demoAnimationCreated(animationItem: AnimationItem) {
    animationItem.play();
    console.log("Animation started");
  }

  public demoAnimationCompleted(event: BMCompleteEvent) {
    console.log("Animation ended");
  }

}

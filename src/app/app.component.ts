import { Component } from '@angular/core';
import { TranslateService } from "@ngx-translate/core";
import { DeviceDetectorService } from "ngx-device-detector";
import { environment } from "@env/environment";
import * as enLang from "@assets/i18n/en.json";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-tailwind-boilerplate';

  constructor(
    private translator: TranslateService,
    private deviceDetectorService: DeviceDetectorService
  ) {
    translator.setTranslation(environment.defaultLang, enLang);
    translator.setDefaultLang(environment.defaultLang);
  }

}

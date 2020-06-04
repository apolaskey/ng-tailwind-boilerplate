import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from '@app/app.module';
import { environment } from '@env/environment';
import { bootstrapHmr } from "@app/utils/hmr-bootstrap";

if (environment.production) {
  enableProdMode();
}

const bootstrap = () => platformBrowserDynamic().bootstrapModule(AppModule);

if (environment.hmr) {
  if (module['hot']) {
    bootstrapHmr(module, bootstrap);
  } else {
    console.error('HMR is disabled for webpack please add --hmr to your launch arguments');
  }
} else {
  bootstrap().catch(err => console.log(err));
}

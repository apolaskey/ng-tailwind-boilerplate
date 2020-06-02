// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import {NgxLoggerLevel} from "ngx-logger";

export const environment = {
  production: false,
  defaultLang: 'en',
  hmr: true,
  loggerConfig: {
    serverLoggingUrl: '/api/report',
    level: NgxLoggerLevel.DEBUG,
    serverLogLevel: NgxLoggerLevel.ERROR
  },
  firebase: {
    apiKey: "AIzaSyBSBwB2lKrUuzesT_havzV4rxORDOMxrPs",
    authDomain: "lodestar-rs.firebaseapp.com",
    databaseURL: "https://lodestar-rs.firebaseio.com",
    projectId: "lodestar-rs",
    storageBucket: "lodestar-rs.appspot.com",
    messagingSenderId: "293878318303",
    appId: "1:293878318303:web:356680b31e0c4e230d156a",
    measurementId: "G-54ZG57V201"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.

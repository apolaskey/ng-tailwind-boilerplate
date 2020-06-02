import {NgxLoggerLevel} from "ngx-logger";

export const environment = {
  production: true,
  defaultLang: 'en',
  hmr: false,
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

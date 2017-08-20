// bootstrap filer
// first file loaded into browser
//bundel start
import {platformBrowserDynamic  } from "@angular/platform-browser-dynamic";
import { AppModule } from "./app/app.module";

platformBrowserDynamic().bootstrapModule(AppModule);
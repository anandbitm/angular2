import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { SharedModule } from "./shared/shared.module";
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { routes } from "./app.routing";
import { RouterModule } from "@angular/router";
// import { ProductModule } from "./product/product.module";
import {environment} from "../environments/environment";

console.log("Environment:",environment);

import {LocationStrategy , HashLocationStrategy ,PathLocationStrategy } from "@angular/common";
import { AuthModule } from "./auth/auth.module";
import { ErrorModule } from "./error/error.module";

@NgModule({
    // for prior module dependencies 
    imports:[
        BrowserModule,
        SharedModule,
      //  ProductModule, 
        RouterModule.forRoot(routes),
        AuthModule,
        ErrorModule
    ],
    declarations:[
        AppComponent,
        HomeComponent,
        ContactComponent,
        AboutComponent,
        HeaderComponent,
        FooterComponent
    ],
    bootstrap:[
        AppComponent,
        //ChatAppComponent
    ],
    providers:[
        {
            provide:LocationStrategy, 
            useClass:HashLocationStrategy //enabling # URL
        },
        {
          provide: "apiEndPoint",
          useValue: "http://localhost:7070"
         }
    ]

})

export class AppModule{

}
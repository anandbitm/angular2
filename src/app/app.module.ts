import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { SharedModule } from "./shared/shared.module";
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
    // for prior module dependencies 
    imports:[
        BrowserModule,
        SharedModule
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
    ]

})

export class AppModule{

}
import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { ContactComponent } from "./contact/contact.component";
import { AboutComponent } from "./about/about.component";

export const routes:Routes =[
    {
        path:"",//Home page localhost:4200/
        component:HomeComponent
    }
    , {
            path: "products",
            loadChildren: './product/product.module#ProductModule'
    },
   { 
        path:'contact',
        component:ContactComponent
    },
    {
        path:'about',
        component:AboutComponent
    }
    
]
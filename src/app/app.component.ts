import {Component,OnInit} from "@angular/core";

@Component({
    selector:'product-app',// html element/
    templateUrl:"app.component.html"
})

export class AppComponent implements OnInit{
    title:string="Product App";
    constructor(){

    }
    // called after view is hosted in browser
    ngOnInit(){

    }
}
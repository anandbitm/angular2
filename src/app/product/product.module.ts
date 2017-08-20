import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductHomeComponent } from './components/product-home/product-home.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductEditComponent } from './components/product-edit/product-edit.component';
import { ProductSearchComponent } from './components/product-search/product-search.component';
import { FilterPipe } from './pipes/filter.pipe';
import { ProductService, ProductWebService } from "./services/product.service";

import {routes} from "./product.routing";
import { RouterModule } from "@angular/router";

import { HttpModule } from "@angular/http";
import { FormsModule,ReactiveFormsModule } from "@angular/forms";
import { ComponentsComponent } from './components/components.component';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ProductHomeComponent,
                 ProductListComponent,
                 ProductEditComponent,
                 ProductSearchComponent,
                 FilterPipe,
                 ComponentsComponent],

  providers:[
    {
      provide :ProductService,// interface 
      useClass:ProductWebService //implementation
    }
  ],
  exports:[
    ProductHomeComponent
  ]               

})
export class ProductModule { }

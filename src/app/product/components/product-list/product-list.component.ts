import { Component, OnInit } from '@angular/core';
import { ProductService } from "../../services/product.service";
import { Product } from "../../models/product.model";
import { Subscription } from "rxjs/Subscription";

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
   products:Product[] = [];
   subcription : Subscription;
   constructor(private productService:ProductService) {

   }

  fetchProducts(){
    this.subcription = this.productService.getProducts()
     .subscribe((products:Product[])=>{ //pull 
         this.products =products;
         console.log("got the product data!");
     })
  }

  deleteProduct(id:any){
     this.productService.deleteProduct(id)
     .subscribe(() =>{
          this.fetchProducts();
       }
     )
  }
  trackById(product:Product,index:number){
   return product.id;
  }
  ngOnInit() {
    this.fetchProducts();
  }

  ngOnDestroy(){
    this.subcription.unsubscribe();
  }

}

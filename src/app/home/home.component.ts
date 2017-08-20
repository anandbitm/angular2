import { Component, OnInit } from '@angular/core';
import { LikeService ,Message } from "../shared/like.service";
import "rxjs/add/operator/filter";
import { Subscription } from "rxjs/Subscription";
import * as $ from "jquery";  //check Definately Typed typescript support for jquery

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers:[
   // LikeService
  ]
})
export class HomeComponent implements OnInit {
  homeLikes:number=1000;

  subscription:Subscription;
  handle:any;

  constructor(private likeService:LikeService) {
      console.log('Home component created!');
   }

  ngOnInit() {
    
      //getter
      this.homeLikes = this.likeService.homeLikes;

        // subscribe 
        this.subscription = this.likeService.likesSubject
         .filter ((message: Message) => message.type == 'Home')
         .subscribe( (message: Message) => {
            this.homeLikes = message.likes;
            console.log("Home Subscribed!");
         })
      
      this.handle =  setInterval(() =>{
          //setter
          this.likeService.homeLikes += 10;
          console.log(this.likeService.homeLikes);
        },3000)
  }

  // will be called before destroying 
  ngOnDestroy(){
    clearInterval(this.handle);
    this.subscription.unsubscribe();
  }

}

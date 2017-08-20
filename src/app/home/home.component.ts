import { Component, OnInit } from '@angular/core';
import { LikeService ,Message } from "../shared/like.service";
import "rxjs/add/operator/filter";

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  homeLikes:number=1000;
  constructor(private likeService:LikeService) {
      console.log('Home component created!');
   }

  ngOnInit() {

      //getter
      this.homeLikes = this.likeService.homeLikes;

        // subscribe 
         this.likeService.likesSubject
         .filter ((message: Message) => message.type == 'Home')
          .subscribe( (message: Message) => {
            this.homeLikes = message.likes;
          })
      
    setInterval(() =>{
      this.likeService.homeLikes += 10;
    },3000)
  }

}

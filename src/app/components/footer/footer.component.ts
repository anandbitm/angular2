import { Component, OnInit } from '@angular/core';
import { LikeService, Message } from "../../shared/like.service";
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  message:Message;
  constructor(private likeservice:LikeService) {

   }

  ngOnInit() {

    this.likeservice.likesSubject.subscribe((message:Message) => {
      console.log("at footer ", message);
      this.message = message;
    })
  }

}

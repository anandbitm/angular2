import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { LikeService } from "../shared/like.service";

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  address:any;
  @ViewChild("para1")
  para1:ElementRef;
  contactLikes :number=100;
  constructor(private likeService:LikeService) {
      console.log('Contact component created!');
   }

  //view is initialize
  ngOnInit() {
   this.para1.nativeElement.textContent ="From TS"
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
 members:string[]=["Member 1","Member 2"];
 show :boolean =true;
  constructor() { }
  
  ngOnInit() {
  }

  
  toggle(event:Event){
    this.show=!this.show;
  }

}

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {
  @Input()
  count:number=0;// default file

  @Input("like-title")//alias
  title:string="";
// for two way binding [(count)]
// the output must be suffix with "Change"
//input name + "Change"
  @Output()
  countChange: EventEmitter<number> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  step(value:number){
    this.countChange.emit(this.count+value); // emitting to Parent - Parent needs to subscribe it 
  }

}

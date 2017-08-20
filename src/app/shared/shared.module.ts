import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LikeComponent } from './like/like.component';
import { HighlightDirective } from "./highlight.directive";
import { PowerPipe } from "./power.pipe";
import { LikeService } from "./like.service";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    LikeComponent,
    HighlightDirective,
    PowerPipe
  ],
  exports:[
    LikeComponent,
    HighlightDirective,
    PowerPipe// if you want to use this in another module the export it otherwise you can only use in this module
  ],
  providers:[
    LikeService // no need to export service to used in another module
  ]
})
export class SharedModule { }

import { Directive, OnInit, Input, ElementRef, Renderer, HostListener } from "@angular/core";

@Directive({
    //[] must for selector , it will not have views(Template Url)
    // <p highlight >
    selector:"[highlight]"
})

export class HighlightDirective implements OnInit{
    @Input()
    color :string ="yellow";
    constructor(private element :ElementRef,private renderer:Renderer){}

    ngOnInit() {
      //  this.setColor(this.color);
    }
    
    @HostListener("mouseenter") 
    onMouseEnter(){
       this.setColor(this.color);
    }

    @HostListener("mouseleave")
    onMouseLeave(){
        this.setColor("");
    }
    setColor(bgColor:string){
        this.renderer.setElementStyle(
            this.element.nativeElement,"background",bgColor
        )
    }

}
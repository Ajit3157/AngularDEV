import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private el :ElementRef) { }

  @HostListener('mouseenter')OnMouseEnter(){
        this.highlight("yellow");
  }

  @HostListener('mouseleave')onMouseLeave(){
        this.highlight('');
  }
  highlight(color : string){
      this.el.nativeElement.style.backgroundColor = color;
  }

}

import { Directive, ElementRef, Renderer2, OnInit,Input,HostListener  } from '@angular/core';

@Directive({
  selector: '[appAppshadow]'
})
export class AppshadowDirective {
  @Input() appAppshadow: string;
  @Input() appAppshadowX: string;
  @Input() appAppshadowY: string;
  @Input() appAppshadowBlur: string;
  @Input() appAppshadow1: string;
  constructor(private elem: ElementRef, private renderer: Renderer2) { }


  @HostListener('mouseenter') onMouseEnter() {
    let shadowStr = `${ this.appAppshadowX } ${ this.appAppshadowY } ${ this.appAppshadowBlur } ${ this.appAppshadow }`;
    this.renderer.setStyle(this.elem.nativeElement, 'box-shadow', shadowStr);
  }
   
 


  

}

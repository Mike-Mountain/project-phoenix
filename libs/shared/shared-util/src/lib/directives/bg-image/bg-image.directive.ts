import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: '[bgImage]',
  standalone: true,
})
export class BgImageDirective {
  constructor(private el: ElementRef,
              private renderer: Renderer2) {
  }

  @Input()
  set bgImage(value: string) {
    this.renderer.setStyle(
      this.el.nativeElement,
      'background',
      `url("${value}") no-repeat center/cover`
    );
  }
}

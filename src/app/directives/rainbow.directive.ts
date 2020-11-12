import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appRainbow]',
})
export class RainbowDirective {
  /*
    Quel propriétés cibler : @HostBinding
    Quel event gérer : @HostListner
  */
  @Input() defaultcolor = 'green';
  @HostBinding('style.color') color = this.defaultcolor;
  @HostBinding('style.borderColor') bc = 'blue';

  constructor() {}
  private getRandomColor(): string {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
  }
  @HostListener('keyup') onKeyUp() {
    this.color = this.getRandomColor();
    this.bc = this.getRandomColor();
  }
}

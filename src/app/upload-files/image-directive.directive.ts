import { Directive, HostListener, HostBinding} from '@angular/core';
import { EventEmitter } from 'events';
import { FileHandle } from './upload-files.directive';

@Directive({
  selector: '[appImageDirective]'
})
export class ImageDirectiveDirective {
  constructor() { }
  @HostBinding('style.background') private background = '#fff';

  @HostListener('mouseover',['$event']) public onMouseOver(evt){
    evt.preventDefault();
    evt.stopPropagation();
    this.background = '#ff0000';
  }

  @HostListener('mouseout', ['$event']) public onMouseOut(evt){
    evt.preventDefault();
    evt.stopPropagation();
    this.background = '#fff';
  }
}

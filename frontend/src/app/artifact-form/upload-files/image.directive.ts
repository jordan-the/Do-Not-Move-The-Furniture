import { Directive, HostListener, HostBinding} from '@angular/core';
import { EventEmitter } from 'events';
import { FileHandle } from './upload-files.directive';

@Directive({
  selector: '[appImageDirective]'
})
export class ImageDirective {
  constructor() { }
  @HostBinding('style.background') private background = '#fff';

  @HostListener('mouseover',['$event']) public onMouseOver(evt){
    evt.preventDefault();
    evt.stopPropagation();
    this.background = '#D5E8D4';
  }

  @HostListener('mouseout', ['$event']) public onMouseOut(evt){
    evt.preventDefault();
    evt.stopPropagation();
    this.background = '#fff';
  }
}

import { Component, OnInit } from '@angular/core';
import { trigger, state, animate, transition, style } from '@angular/animations';

@Component({
  selector: 'app-front-page',
  templateUrl: './front-page.component.html',
  styleUrls: ['./front-page.component.css'],
  animations: [
    trigger('carousel', [
    ])
  ]
})
export class FrontPageComponent implements OnInit {

  bannerPic: any[] = [
      {img: '/assets/image/1.png'},
      {img: '/assets/image/2.png'},
      {img: '/assets/image/3.png'},
    ];
    state = 'stay';
    timer: any;
    
  constructor() { }

  ngOnInit() {
    this.autoPlay();
  }

  autoPlay(): void {
    const me = this;
    this.timer = setInterval(() => {
      me.state = me.state === 'stay' ? 'moveLeft' : 'stay';
    }, 3000);
``}


  afterPlay(): void {
    if (this.state === 'stay' || this.state === 'moveLeft') {
      this.bannerPic.push(this.bannerPic[0]);
      this.bannerPic.shift();
    } else if (this.state === 'moveRight') {
      const last = this.bannerPic.length - 1;
      this.bannerPic.unshift(this.bannerPic[last]);
      this.bannerPic.pop();
      this.state = 'stayR';
    }
  }

  stopPlay(): void {
    clearInterval(this.timer);
  }
}

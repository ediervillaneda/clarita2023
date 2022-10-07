import { Component, OnInit } from '@angular/core';
import SwiperCore, { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent implements OnInit {
  config: SwiperOptions = {
    direction: 'vertical',
    mousewheel: {},
    effect: 'cube',
    keyboard: {
      enabled: true,
      onlyInViewport: false
    }
  };

  onSlideChange() {
    console.log('slide change');
  }

  constructor() {}

  ngOnInit(): void {}
}

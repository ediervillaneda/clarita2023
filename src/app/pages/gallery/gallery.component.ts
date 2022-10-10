import { Component, OnInit } from '@angular/core';

declare var $: any;
@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent implements OnInit {
  items: number = 4;
  number: number[] = [];
  constructor() {
    for (let n = 0; n < this.items; n++) {
      this.number[n] = n + 1;
    }
  }

  ngOnInit(): void {}
}

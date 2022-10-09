import { Component, OnInit } from '@angular/core';

declare var $: any;
@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent implements OnInit {
  number: number[] = [1, 2, 3, 4];
  constructor() {}

  ngOnInit(): void {}
}

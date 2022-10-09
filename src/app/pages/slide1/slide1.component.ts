import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-slide1',
  templateUrl: './slide1.component.html',
  styleUrls: ['./slide1.component.scss'],
})
export class Slide1Component implements OnInit {
  @Input() number: number | undefined;

  constructor() {}

  ngOnInit(): void {}
}

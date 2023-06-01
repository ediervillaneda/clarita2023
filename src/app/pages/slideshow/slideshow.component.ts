import { Component, OnInit, Renderer2, ElementRef, ViewChild } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss'],
})
export class SlideshowComponent implements OnInit {



  @ViewChild('cgeneral', { static: false }) div: ElementRef | undefined;
  constructor(
    private storage: AngularFireStorage,
    private el: ElementRef,
    private renderer: Renderer2
  ) {}

  ngOnInit(): void {

    for (let index = 1; index <= 4; index++) {
      this.Listar(index);
    }
  }

  Listar(index: number) {
    const storageRef = this.storage.ref(`/wrap${index}`);
    const listRef = storageRef.listAll();
    let cantidad = 1;
    listRef.subscribe((itemRef) => {
      itemRef.items.forEach((item) => {
        const img = this.renderer.createElement('img');
        item.getDownloadURL().then((value) => {
          img.setAttribute('src', value);
        });
        img.setAttribute('alt', '');
        cantidad++;

        this.renderer.appendChild(this.el.nativeElement, img);
      });
    });
  }
}

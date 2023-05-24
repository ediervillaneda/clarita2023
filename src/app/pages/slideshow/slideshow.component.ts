import { Component, Input, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { getStorage, ref, listAll, getDownloadURL } from 'firebase/storage';
import { Renderer2, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

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
    console.log('Edier');

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
          console.log(cantidad);
        });
        img.setAttribute('alt', '');
        cantidad++;

        this.renderer.appendChild(this.el.nativeElement, img);
      });
    });
  }
  // const storage = getStorage();
  // const listRef = ref(storage, '/');
  //   listAll(listRef)
  //     .then((res) => {
  //       res.items.forEach((itemRef) => {
  //         const img = this.renderer.createElement('img');
  //         img.setAttribute('src', itemRef.fullPath);
  //         img.setAttribute('alt', '');

  //         this.renderer.appendChild(this.el.nativeElement, img);
  //       });
  //     })
  //     .catch((error) => {
  //       // Uh-oh, an error occurred!
  //     });
  // }
}

import { Component, Input, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { getStorage, ref, listAll } from 'firebase/storage';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-slide',
  templateUrl: './slide1.component.html',
  styleUrls: ['./slide1.component.scss'],
})
export class Slide1Component implements OnInit {
  @Input() number: number | undefined;
  profileUrl: Observable<string | null> | undefined;
  storage = getStorage();

  constructor(private _storage: AngularFireStorage) {
    const listRef = ref(this.storage, 'wrap1/');

    listAll(listRef)
      .then((res) => {
        res.prefixes.forEach((folderRef) => {
          // All the prefixes under listRef.
          // You may call listAll() recursively on them.
        });
        res.items.forEach((itemRef) => {
          console.log(itemRef.fullPath);

          // All the items under listRef.
        });
      })
      .catch((error) => {
        // Uh-oh, an error occurred!
      });
  }

  ngOnInit(): void {}

}

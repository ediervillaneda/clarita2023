import { Component, Input, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { getStorage, ref, listAll, getDownloadURL } from 'firebase/storage';
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
  urlImage: string[] = [];

  constructor(private _storage: AngularFireStorage) {
    const listRef = ref(this.storage, 'wrap1/');

    getDownloadURL(listRef).then((res) => {
      console.log(res);
    });

    listAll(listRef)
      .then((res) => {
        res.prefixes.forEach((folderRef) => {
          // this.urlImage[]
          // console.log(folderRef);
          // All the prefixes under listRef.
          // You may call listAll() recursively on them.
        });
        res.items.forEach((itemRef) => {
          // console.log(itemRef.name);
          // All the items under listRef.
        });
      })
      .catch((error) => {
        // Uh-oh, an error occurred!
      });
  }

  ngOnInit(): void {}
}

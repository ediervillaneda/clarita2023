import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { getStorage, getDownloadURL } from 'firebase/storage';

@Injectable({
  providedIn: 'root',
})
export class ImagesService {
  urlImage: Array<string> = [];
  storage = getStorage();

  constructor(private _storage: AngularFireStorage) {}

  async getUrl(folder: number = 1): Promise<void> {
    let i = 0;

    const listRef = this._storage.ref(`wrap${folder}/`);

    listRef.listAll().subscribe((res) => {
      res.items.forEach((itemRef) => {
        getDownloadURL(itemRef).then((url) => {
          if (url != undefined) {
            this.urlImage[i] = url;
            i++;
          }
        });
      });
    });
  }

  url(item: string) {
    return `url('${item}')`;
  }
}

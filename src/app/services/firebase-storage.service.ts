import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Observable } from 'rxjs';
import { getStorage, ref, getDownloadURL } from 'firebase/storage';

@Injectable({
  providedIn: 'root',
})
export class FireStorangeService {

  const storage = getStorage();

  constructor(private _storage: AngularFireStorage) {}

  getPaginatedImages(page: number, pageSize: number): Observable<any> {
    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;

    // Utiliza las funciones de AngularFireStorage para obtener las referencias a las imágenes y sus URLs
    // Puedes adaptar esta lógica según la estructura de tu proyecto y cómo almacenes las imágenes en Firebase Storage
    const storageRef = this.storage.ref('/images');
    const listRef = storageRef.listAll();

    // return listRef.items
    //   .slice(startIndex, endIndex)
    //   .map((item) => item.getDownloadURL());

    return listRef.listAll().then((res) => {
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
}

import { Component, Input } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { ImagesService } from 'src/app/services/images.service';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.scss'],
})
export class SlideComponent {
  @Input() number: number | undefined;

  subscription: any;
  constructor(private _storage: AngularFireStorage) {
    console.log(this.number);
    this.getImageList();
  }

  async getImageList(): Promise<void> {
    const directory = `wrap${this.number}/`;
    const listRef = this._storage.ref(directory);
    //Can't make the sample code work here

    listRef.listAll().subscribe((result) => {
      result.items.forEach((imageRef) => {
        this.displayImage(imageRef);
      });
    });
  }

  displayImage(imageRef: { getDownloadURL: () => Promise<any> }) {
    imageRef
      .getDownloadURL()
      .then(function (url: any) {
        console.log(url);

        // TODO: Display the image on the UI
      })
      .catch(function (error: any) {
        // Handle any errors
      });
  }
}

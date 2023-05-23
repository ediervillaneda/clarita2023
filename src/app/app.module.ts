import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeartComponent } from './share/heart/heart.component';
import { CountdownComponent } from './share/countdown/countdown.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { SlideComponent } from './pages/slide/slide.component';
import { IntroComponent } from './pages/intro/intro.component';
import { MotorcycleComponent } from './pages/motorcycle/motorcycle.component';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    HeartComponent,
    CountdownComponent,
    GalleryComponent,
    SlideComponent,
    IntroComponent,
    MotorcycleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireStorageModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

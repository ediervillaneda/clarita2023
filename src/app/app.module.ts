import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SwiperModule } from 'swiper/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeartComponent } from './share/heart/heart.component';
import { CountdownComponent } from './share/countdown/countdown.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { Slide1Component } from './pages/slide1/slide1.component';

@NgModule({
  declarations: [
    AppComponent,
    HeartComponent,
    CountdownComponent,
    GalleryComponent,
    Slide1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SwiperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

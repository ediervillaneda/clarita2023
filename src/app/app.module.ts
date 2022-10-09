import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeartComponent } from './share/heart/heart.component';
import { CountdownComponent } from './share/countdown/countdown.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { Slide1Component } from './pages/slide1/slide1.component';
import { IntroComponent } from './pages/intro/intro.component';

@NgModule({
  declarations: [
    AppComponent,
    HeartComponent,
    CountdownComponent,
    GalleryComponent,
    Slide1Component,
    IntroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

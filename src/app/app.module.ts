import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { environment } from '../environments/environment';
// import { initializeApp } from "firebase/app";

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
    IntroComponent,
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

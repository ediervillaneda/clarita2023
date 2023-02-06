import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeartComponent} from './share/heart/heart.component';
import {CountdownComponent} from './share/countdown/countdown.component';
import {GalleryComponent} from './pages/gallery/gallery.component';
import {SlideComponent} from './pages/slide/slide.component';
import {IntroComponent} from './pages/intro/intro.component';
import {ChristmasComponent} from "./share/christmas/christmas.component";
import {NavidadComponent} from './pages/navidad/navidad.component';

@NgModule({
  declarations: [
    AppComponent,
    HeartComponent,
    ChristmasComponent,
    CountdownComponent,
    GalleryComponent,
    SlideComponent,
    IntroComponent,
    NavidadComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}

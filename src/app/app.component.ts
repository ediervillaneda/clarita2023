import { Component } from '@angular/core';
import { CounterService } from './services/counter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Cumpleaños de Clarita 2023';
  isComplete: boolean = false;

  constructor(public _counter: CounterService) {
    this._counter.countdown();
    this.isComplete = !_counter.counter.complete;
  }
}

import { Component, OnInit, OnDestroy } from '@angular/core';
import { CounterService } from 'src/app/services/counter.service';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.scss'],
})
export class CountdownComponent implements OnInit, OnDestroy {
  id: ReturnType<typeof setTimeout> | undefined;

  constructor(public _counter: CounterService) {
    this._counter.countdown();
  }

  ngOnInit(): void {
    this.id = setInterval(() => this._counter.countdown(), 999);
  }

  ngOnDestroy() {
    if (this.id) {
      clearInterval(this.id);
    }
  }
}

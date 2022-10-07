import { Injectable } from '@angular/core';

import { Counter } from '../interfaces/counter.interface';

@Injectable({
  providedIn: 'root',
})
export class CounterService {
  year = new Date().getFullYear();
  seventhOfJune = new Date(this.year, 5, 7).getTime();
  seventhOfJuneNextYear = new Date(this.year + 1, 5, 7).getTime();

  counter: Counter = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    daysText: '',
    complete: false,
  };

  constructor() {
    this.countdown();
  }

  countdown() {
    // get today's date
    const today = new Date().getTime();
    const month = new Date().getMonth();
    this.counter.daysText = 'dias';

    // get the difference
    let diff;
    if (month > 6) {
      diff = this.seventhOfJuneNextYear - today;
    } else {
      diff = this.seventhOfJune - today;
    }

    // math
    this.counter.days = Math.floor(diff / (1000 * 60 * 60 * 24));
    this.counter.hours = Math.floor(
      (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    this.counter.minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    this.counter.seconds = Math.floor((diff % (1000 * 60)) / 1000);

    if (this.counter.days == 1) {
      this.counter.daysText = 'dia';
    }
    this.counter.complete = diff <= 0 ? true : false;

  }
}

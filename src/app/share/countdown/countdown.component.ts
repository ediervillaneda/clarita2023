import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.css'],
})
export class CountdownComponent implements OnInit, OnDestroy {
  year = new Date().getFullYear();
  seventhOfJune = new Date(this.year, 5, 7).getTime();
  seventhOfJuneNextYear = new Date(this.year + 1, 5, 7).getTime();
  month = new Date().getMonth();
  days: number = 0;
  daysText: string = '';
  hours: number = 0;
  minutes: number = 0;
  seconds: number = 0;
  id: ReturnType<typeof setTimeout> | undefined;
  title: string = '';

  constructor() {
    this.title = 'Cumpleaños de Clarita 2023';
  }

  ngOnInit(): void {
    this.id = setInterval(() => this.countdown(), 1000);
  }

  ngOnDestroy() {
    if (this.id) {
      clearInterval(this.id);
    }
  }

  countdown() {
    // get today's date
    const today = new Date().getTime();

    // get the difference
    let diff;
    if (this.month > 6) {
      diff = this.seventhOfJuneNextYear - today;
    } else {
      diff = this.seventhOfJune - today;
    }

    // math
    this.days = Math.floor(diff / (1000 * 60 * 60 * 24));
    this.hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    this.minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    this.seconds = Math.floor((diff % (1000 * 60)) / 1000);

    if (this.days <= 1) {
      this.daysText = 'dia';
    } else {
      this.daysText = 'dias';
    }
  }
}

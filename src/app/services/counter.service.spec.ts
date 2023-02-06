import { TestBed } from '@angular/core/testing';

import { CounterService } from './counter.service';

describe('CounterService', () => {
  let _service: CounterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    _service = TestBed.inject(CounterService);
  });

  it('should be year', () => {
    expect(_service.year).toBeGreaterThan(0);
  });

  it('should be days', () => {
    expect(_service.counter.days).toBeGreaterThan(0);
  });

  it('should be hours', () => {
    expect(_service.counter.hours).toBeGreaterThan(0);
  });

  it('should be minutes', () => {
    expect(_service.counter.minutes).toBeGreaterThan(0);
  });
});

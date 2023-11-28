import { TestBed } from '@angular/core/testing';


import { ExcursionGuard } from './excursion.guard';

describe('excursionGuard', () => {
  let guard: ExcursionGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ExcursionGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

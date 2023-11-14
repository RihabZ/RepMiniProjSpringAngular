import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { excursionGuard } from './excursion.guard';

describe('excursionGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => excursionGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});

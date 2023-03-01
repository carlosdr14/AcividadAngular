import { TestBed } from '@angular/core/testing';

import { RolEmployedGuard } from './rol-employed.guard';

describe('RolEmployedGuard', () => {
  let guard: RolEmployedGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(RolEmployedGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { LifeTrackerService } from './life-tracker.service';

describe('LifeTrackerService', () => {
  let service: LifeTrackerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LifeTrackerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

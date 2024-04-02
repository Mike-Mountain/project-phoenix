import { TestBed } from '@angular/core/testing';

import { CmGameService } from './cm-game.service';

describe('CmGameService', () => {
  let service: CmGameService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CmGameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { CmSettingsService } from './cm-settings.service';

describe('CmSettingsService', () => {
  let service: CmSettingsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CmSettingsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

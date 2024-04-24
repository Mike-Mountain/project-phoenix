import { TestBed } from '@angular/core/testing';

import { MovieFeaturedService } from './movie-featured.service';

describe('MovieFeaturedService', () => {
  let service: MovieFeaturedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MovieFeaturedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { MovieSearchResultsService } from './movie-search-results.service';

describe('MovieSearchResultsService', () => {
  let service: MovieSearchResultsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MovieSearchResultsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

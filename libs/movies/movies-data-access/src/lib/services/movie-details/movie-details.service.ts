import { Injectable } from '@angular/core';
import { BaseHttpService } from '@project-phoenix/shared/shared-data-access';
import { ApiDetails, createSearchResults, SearchResults } from '../../models';
import { catchError, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieDetailsService extends BaseHttpService<SearchResults> {
  public searchType: 'id' | 'title' = 'id';
  public imdbIdSrc: string | undefined;

  public getDetails(imdbId: string): Observable<SearchResults> {
    const url = super.setMovieUrl('i', imdbId);
    console.log(url);
    return super._get(url).pipe(
      map((details) => createSearchResults(details as unknown as ApiDetails)),
      catchError(err => {
        console.log(err);
        throw new Error();
      })
    );
  }

  public feelinLucky(imdbTitle: string): Observable<SearchResults> {
    const url = super.setMovieUrl('t', imdbTitle);
    return super._get(url).pipe(
      map(details => createSearchResults(details as unknown as ApiDetails)),
      catchError(err => {
        console.log(err);
        throw new Error();
      })
    );
  }
}

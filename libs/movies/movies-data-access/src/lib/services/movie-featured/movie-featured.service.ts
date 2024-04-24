import { Injectable } from '@angular/core';
import { BaseHttpService } from '@project-phoenix/shared/shared-data-access';
import { ApiDetails, createSearchResults, FeaturedMovies, SearchResults } from '@project-phoenix/movies-data-access';
import { forkJoin, map, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieFeaturedService extends BaseHttpService<SearchResults> {

  public getMovies(movies: FeaturedMovies[]): Observable<SearchResults[]> {
    const urls = movies.map(movie => super.setMovieUrl('i', movie.imdbId));
    const sources = urls.map(url => super._get(url).pipe(map(item => createSearchResults(item as unknown as ApiDetails))));
    return forkJoin(sources).pipe(
      tap(data => console.log(data))
    );
  }
}

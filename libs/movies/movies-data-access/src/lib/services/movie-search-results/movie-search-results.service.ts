import { Injectable } from '@angular/core';
import { BaseHttpService, SearchType } from '@project-phoenix/shared/shared-data-access';
import { ApiResultsModel, ResultsList } from '../../models';
import { catchError, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieSearchResultsService extends BaseHttpService<ResultsList> {
  public currentPage = 1;

  public get page(): number {
    return this.currentPage;
  }

  public set page(value: number) {
    this.currentPage = value;
  }

  public searchMedia(type: SearchType, query: string, page?: number): Observable<ResultsList> {
    let url: string;
    if (page) {
      url = super.setMovieUrl(type, query, page);
    } else {
      url = super.setMovieUrl(type, query);
    }
    return super._get(url).pipe(
      map(results => new ResultsList(results as unknown as ApiResultsModel)),
      catchError(err => {
        console.log(err);
        throw new Error();
      })
    );
  }
}

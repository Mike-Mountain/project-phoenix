import { Component, inject, OnInit } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { Observable, switchMap, tap } from 'rxjs';
import { MovieSearchResultsService, ResultsList } from '@project-phoenix/movies-data-access';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ResultsListItemComponent } from '@project-phoenix/movies-ui';
import { ResultsPaginationComponent } from '../results-pagination/results-pagination.component';
import { MatCard, MatCardContent } from '@angular/material/card';

@Component({
  selector: 'movies-feature-movie-search-results',
  standalone: true,
  imports: [CommonModule, ResultsListItemComponent, ResultsPaginationComponent, MatCard, MatCardContent],
  templateUrl: './movie-search-results.component.html',
  styleUrl: './movie-search-results.component.scss'
})
export class MovieSearchResultsComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private location = inject(Location);
  private resultsService = inject(MovieSearchResultsService);

  public results$: Observable<ResultsList> | undefined;
  public searchQuery = '';
  public currentPage = 1;
  public results: ResultsList | undefined;
  public currentLocation: Location | undefined;

  ngOnInit() {
    this.currentLocation = this.location;
    this.results$ = this.route.queryParams.pipe(
      switchMap(params => {
        this.searchQuery = params['query'];
        this.currentPage = params['page'];
        return this.resultsService.searchMedia('s', this.searchQuery, this.currentPage);
      })
    );
  }

  public updatePage(page: number, pageTop: Element): void {
    this.router.navigate([], { queryParams: { page } }).then(() => {
      pageTop.scrollIntoView();
    });
  }
}

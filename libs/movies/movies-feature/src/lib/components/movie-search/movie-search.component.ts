import { Component, inject, Input, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationEnd, Router } from '@angular/router';
import { ReplaySubject, takeUntil } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { MovieDetailsService } from '@project-phoenix/movies-data-access';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'movies-feature-movie-search',
  standalone: true,
  imports: [CommonModule, FormsModule, MatFormField, MatInput, MatLabel, MatButton],
  templateUrl: './movie-search.component.html',
  styleUrl: './movie-search.component.scss'
})
export class MovieSearchComponent implements OnInit, OnDestroy {
  private router = inject(Router);
  private detailsService = inject(MovieDetailsService);

  @Input() public isRouted: boolean | undefined | null
  public searchQuery = '';

  private destroyed$ = new ReplaySubject<boolean>(1);

  ngOnInit() {
    this.router.events
      .pipe(takeUntil(this.destroyed$))
      .subscribe(event => {
        if (event instanceof NavigationEnd) {
          this.searchQuery = this.setSearchQuery(event.urlAfterRedirects);
        }
      });
  }

  ngOnDestroy() {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }

  public search(query: string): void {
    if (query.trim() !== '') {
      this.detailsService.searchType = 'id';
      this.router.navigate([`results/${query}`], { queryParams: { page: 1 } });
    } else {
      // this.toastr.error('Please enter a search query', '', {positionClass: 'toast-top-center'});
    }
  }

  public feelingLuckySearch(query: string): void {
    if (query.trim() !== '') {
      this.detailsService.searchType = 'title';
      this.router.navigateByUrl(`details/title/${query}`);
    } else {
      // this.toastr.error('Please enter a search query', '', {positionClass: 'toast-top-center'});
    }
  }

  private setSearchQuery(url: string): string {
    if (url.includes('results')) {
      // Grab the query string from the url and reformat
      const fullString = url.split('/')[2];
      // Remove query params
      const query = fullString.split('?')[0];
      const queryStrings = query.split('%20');
      return queryStrings.join(' ');
    } else if (url.includes('details')) {
      if (!this.searchQuery) {
        const query = url.split('/')[4];
        const queryStrings = query.split('%20');
        this.searchQuery = queryStrings.join(' ');
      }
      return this.searchQuery;
    }
    return '';
  }
}

import { Component, inject, Input, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationEnd, Router } from '@angular/router';
import { Observable, of, ReplaySubject, takeUntil } from 'rxjs';
import { FormsModule } from '@angular/forms';
import {
  featuredMovies,
  FeaturedMovies,
  MovieDetailsService,
  MovieFeaturedService, SearchResults
} from '@project-phoenix/movies-data-access';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatButton } from '@angular/material/button';
import { FeaturedComponent } from '@project-phoenix/movies-ui';
import { SpinnerComponent } from '@project-phoenix/shared/shared-feature';

@Component({
  selector: 'movies-feature-movie-search',
  standalone: true,
  imports: [CommonModule, FormsModule, MatFormField, MatInput, MatLabel, MatButton, FeaturedComponent, SpinnerComponent],
  templateUrl: './movie-search.component.html',
  styleUrl: './movie-search.component.scss'
})
export class MovieSearchComponent {
  private router = inject(Router);
  private detailsService = inject(MovieDetailsService);
  private featuredService = inject(MovieFeaturedService);

  @Input() public isRouted: boolean | undefined | null;
  @Input() public searchQuery = '';

  public featuredMovies$: Observable<SearchResults[]> = this.featuredService.getMovies(featuredMovies);

  public search(query: string): void {
    if (query.trim() !== '') {
      this.detailsService.searchType = 'id';
      this.router.navigate([`movies/results`], { queryParams: { query, page: 1 } });
    } else {
      // this.toastr.error('Please enter a search query', '', {positionClass: 'toast-top-center'});
    }
  }

  public feelingLuckySearch(query: string): void {
    if (query.trim() !== '') {
      this.detailsService.searchType = 'title';
      this.router.navigate([`movies/title`], { queryParams: { query } });
    } else {
      // this.toastr.error('Please enter a search query', '', {positionClass: 'toast-top-center'});
    }
  }
}

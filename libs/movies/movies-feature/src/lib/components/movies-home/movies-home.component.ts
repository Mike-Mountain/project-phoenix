import { Component, Inject, inject, OnInit } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { Observable, of, switchMap } from 'rxjs';
import { MovieSearchComponent } from '../movie-search/movie-search.component';
import { MatCard, MatCardContent } from '@angular/material/card';
import { ThemeService } from '@project-phoenix/shared/shared-ui';
import { Theme } from '@project-phoenix/shared/shared-data-access';

@Component({
  selector: 'movies-feature-movies-home',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MovieSearchComponent, MatCard, MatCardContent],
  templateUrl: './movies-home.component.html',
  styleUrl: './movies-home.component.scss'
})
export class MoviesHomeComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private themeService = inject(ThemeService);

  public isSearching$: Observable<boolean> = of(false);
  public searchQuery = '';

  constructor(@Inject(DOCUMENT) private document: Document) {
  }

  ngOnInit() {
    this.themeService.updateTheme(Theme.MOVIES);

    this.isSearching$ = this.route.queryParams.pipe(
      switchMap(params => {
        this.searchQuery = params['query'];
        const isDetails = this.router.url.includes('id') || this.router.url.includes('title');
        return of(!!this.searchQuery || isDetails);
      })
    );
  }
}

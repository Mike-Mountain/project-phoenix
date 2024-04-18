import { Component, Inject, inject, OnInit } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';
import { ActivatedRoute, NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { Observable, of, switchMap } from 'rxjs';
import { MovieSearchComponent } from '../movie-search/movie-search.component';
import { MatCard, MatCardContent } from '@angular/material/card';

@Component({
  selector: 'movies-feature-movies-home',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MovieSearchComponent, MatCard, MatCardContent],
  templateUrl: './movies-home.component.html',
  styleUrl: './movies-home.component.scss'
})
export class MoviesHomeComponent implements OnInit {
  private route = inject(ActivatedRoute);

  public isSearching$: Observable<boolean> = of(false);
  public searchQuery = '';

  constructor(@Inject(DOCUMENT) private document: Document) {
  }

  ngOnInit() {
    // Update theme
    this.document.body.classList.remove('default-dark');
    this.document.body.classList.add('movies');

    this.isSearching$ = this.route.queryParams.pipe(
      switchMap(params => {
        this.searchQuery = params['query'];
        return of(!!this.searchQuery);
      })
    );
  }
}

import { Component, Inject, inject, OnInit } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { Observable, of, switchMap } from 'rxjs';
import { MovieSearchComponent } from '../movie-search/movie-search.component';
import { MatCard, MatCardContent } from '@angular/material/card';
import { ThemeService } from '@project-phoenix/shared/shared-ui';
import { DatabaseService, Theme } from '@project-phoenix/shared/shared-data-access';

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
  private dbService = inject(DatabaseService);

  public isSearching$: Observable<boolean> = of(false);
  public searchQuery = '';

  constructor(@Inject(DOCUMENT) private document: Document) {
  }

  ngOnInit() {
    this.themeService.updateTheme(Theme.MOVIES);

    // this.dbService.post('test', {name: 'Mike', done: false}).subscribe(data => console.log('PUT DATA1', data));
    // this.dbService.get('test', 1).subscribe(data => console.log(data));
    this.dbService.put('test', {name: 'Mike2', done: true}, 4).subscribe(data => console.log(data));
    // this.dbService.putInline('test', 1, 'name', 'Mike3').subscribe(data => console.log(data));
    // this.dbService.delete('test', 3).subscribe(data => console.log(data));

    this.isSearching$ = this.route.queryParams.pipe(
      switchMap(params => {
        this.searchQuery = params['query'];
        const isDetails = this.router.url.includes('id') || this.router.url.includes('title');
        return of(!!this.searchQuery || isDetails);
      })
    );
  }
}

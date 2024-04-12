import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { Observable, of, switchMap } from 'rxjs';
import { MovieSearchComponent } from '@project-phoenix/movies-feature';

@Component({
  selector: 'movies-feature-movies-home',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MovieSearchComponent],
  templateUrl: './movies-home.component.html',
  styleUrl: './movies-home.component.scss',
})
export class MoviesHomeComponent implements OnInit {
  public isRoutedValue$: Observable<boolean> | undefined;
  private router = inject(Router);

  ngOnInit() {
    this.isRoutedValue$ = this.router.events.pipe(
      switchMap((event) => {
        if (event instanceof NavigationEnd) {
          return of(event.urlAfterRedirects !== '/movies');
        }
        return of(false);
      })
    )
  }
}

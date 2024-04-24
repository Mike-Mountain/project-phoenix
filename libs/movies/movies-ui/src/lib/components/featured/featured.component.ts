import { Component, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { BgImageDirective } from '@project-phoenix/shared/shared-util';
import { FeaturedMovies, SearchResults } from '@project-phoenix/movies-data-access';

@Component({
  selector: 'movies-ui-featured',
  standalone: true,
  imports: [CommonModule, RouterLink, BgImageDirective],
  templateUrl: './featured.component.html',
  styleUrl: './featured.component.scss'
})
export class FeaturedComponent {
  private router = inject(Router);

  @Input() public movies: SearchResults[] | null = [];

  routeToDetails(movie: SearchResults) {
    this.router.navigate(['/movies/id'], { queryParams: { imdbId: movie.imdbId, query: movie.title } });
  }
}

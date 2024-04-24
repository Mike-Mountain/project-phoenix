import { Component, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingleResult } from '@project-phoenix/movies-data-access';
import { Router, RouterLink } from '@angular/router';
import { BreakTitlePipe, DefaultImagePipe } from '@project-phoenix/shared/shared-util';
import { MatCard, MatCardContent } from '@angular/material/card';

@Component({
  selector: 'movies-ui-results-list-item',
  standalone: true,
  imports: [CommonModule, RouterLink, DefaultImagePipe, BreakTitlePipe, MatCard, MatCardContent],
  templateUrl: './results-list-item.component.html',
  styleUrl: './results-list-item.component.scss'
})
export class ResultsListItemComponent {
  private router = inject(Router);

  @Input() searchResult: SingleResult | undefined;
  @Input() searchQuery: string | undefined;

  routeToDetails(searchResult: SingleResult) {
    this.router.navigate(['/movies/id'], { queryParams: { imdbId: searchResult.imdbID, query: searchResult.title } });
  }
}

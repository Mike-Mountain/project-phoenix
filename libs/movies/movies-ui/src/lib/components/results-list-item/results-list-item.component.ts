import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingleResult } from '@project-phoenix/movies-data-access';
import { RouterLink } from '@angular/router';
import { BreakTitlePipe, DefaultImagePipe } from '@project-phoenix/shared/shared-util';

@Component({
  selector: 'movies-ui-results-list-item',
  standalone: true,
  imports: [CommonModule, RouterLink, DefaultImagePipe, BreakTitlePipe],
  templateUrl: './results-list-item.component.html',
  styleUrl: './results-list-item.component.scss',
})
export class ResultsListItemComponent {
  @Input() searchResult: SingleResult | undefined;
  @Input() searchQuery: string | undefined;
}

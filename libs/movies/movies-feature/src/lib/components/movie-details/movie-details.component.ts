import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable, switchMap } from 'rxjs';
import { MovieDetailsService, SearchResults } from '@project-phoenix/movies-data-access';
import { ActivatedRoute } from '@angular/router';
import { BgImageDirective, BreakTitlePipe, DefaultImagePipe, ToArrayPipe } from '@project-phoenix/shared/shared-util';
import { MatCard, MatCardContent } from '@angular/material/card';
import { SpinnerComponent } from '@project-phoenix/shared/shared-feature';
import { MatTab, MatTabGroup } from '@angular/material/tabs';

@Component({
  selector: 'movies-feature-movie-details',
  standalone: true,
  imports: [CommonModule, BgImageDirective, DefaultImagePipe, BreakTitlePipe, ToArrayPipe, MatCard, MatCardContent, SpinnerComponent, MatTabGroup, MatTab],
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.scss'
})
export class MovieDetailsComponent implements OnInit {

  private route = inject(ActivatedRoute);
  private detailsService = inject(MovieDetailsService);

  public details$: Observable<SearchResults> | undefined;
  public tabs = ['Cast', 'Acclaim', 'More'];
  public currentTab = this.tabs[0];

  ngOnInit() {
    this.details$ = this.route.queryParams
      .pipe(
        switchMap((params) => {
          if (this.detailsService.searchType === 'id' && params['imdbId']) {
            return this.detailsService.getDetails(params['imdbId']);
          } else {
            return this.detailsService.feelinLucky(params['query']);
          }
        })
      );
  }

}

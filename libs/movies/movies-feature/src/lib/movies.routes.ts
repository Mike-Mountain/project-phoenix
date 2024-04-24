import { Routes } from '@angular/router';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { MovieSearchResultsComponent } from './components/movie-search-results/movie-search-results.component';
import { MoviesHomeComponent } from './components/movies-home/movies-home.component';

export const movieRoutes: Routes = [
  {
    path: '', component: MoviesHomeComponent, children: [
      { path: 'results', component: MovieSearchResultsComponent },
      { path: 'id', component: MovieDetailsComponent },
      { path: 'title', component: MovieDetailsComponent }
    ]
  }
];

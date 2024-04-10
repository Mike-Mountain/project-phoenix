import { Routes } from '@angular/router';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { MoviesHomeComponent } from '@project-phoenix/movies-ui';
import { MovieSearchResultsComponent } from './components/movie-search-results/movie-search-results.component';

export const movieRoutes: Routes = [
  { path: '', component: MoviesHomeComponent },
  { path: 'id/:imdbId/:query', component: MovieDetailsComponent },
  { path: 'title/:query', component: MovieDetailsComponent },
  { path: 'results/:query', component: MovieSearchResultsComponent }
];

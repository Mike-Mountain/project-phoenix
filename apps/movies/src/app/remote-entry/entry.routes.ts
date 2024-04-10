import { Route } from '@angular/router';

export const remoteRoutes: Route[] = [
  { path: '', loadChildren: () => import('@project-phoenix/movies/Routing').then(r => r.movieRoutes) },
];

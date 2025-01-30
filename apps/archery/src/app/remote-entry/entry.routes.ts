import { Route } from '@angular/router';

export const remoteRoutes: Route[] = [
  { path: '', loadChildren: () => import('@project-phoenix/archery/Routing').then(r => r.archeryRoutes) }
];

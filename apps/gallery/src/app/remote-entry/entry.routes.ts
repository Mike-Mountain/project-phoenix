import { Route } from '@angular/router';

export const remoteRoutes: Route[] = [
  { path: '', loadChildren: () => import('@project-phoenix/gallery/Routing').then(r => r.galleryRoutes) }
];

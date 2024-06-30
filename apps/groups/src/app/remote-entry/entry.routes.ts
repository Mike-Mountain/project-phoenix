import { Route } from '@angular/router';

export const remoteRoutes: Route[] = [
  { path: '', loadChildren: () => import('@project-phoenix/groups/Routing').then(r => r.groupsRoutes) }
];

import { Route } from '@angular/router';
import { authGuard } from '@project-phoenix/shared/shared-util';

export const remoteRoutes: Route[] = [
  { path: '', canActivate: [authGuard], loadChildren: () => import('@project-phoenix/groups/Routing').then(r => r.groupsRoutes) }
];

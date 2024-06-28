import { Route } from '@angular/router';
import { HomeComponent } from '@project-phoenix/container/container-ui';
import { authGuard } from '@project-phoenix/shared/shared-util';

export const appRoutes: Route[] = [
  {
    path: 'gallery',
    loadChildren: () => import('gallery/Routes').then((m) => m.remoteRoutes)
  },
  {
    path: 'budgets',
    canActivate: [authGuard],
    loadChildren: () => import('budgets/Routes').then((m) => m.remoteRoutes)
  },
  {
    path: 'movies',
    loadChildren: () => import('movies/Routes').then((m) => m.remoteRoutes)
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'resume',
    loadChildren: () => import('resume/Routes').then((m) => m.remoteRoutes)
  },
  {
    path: 'code-master',
    loadChildren: () =>
      import('code-master/Routes').then((m) => m.remoteRoutes)
  },
  { path: '', pathMatch: 'full', redirectTo: '/home' }
];

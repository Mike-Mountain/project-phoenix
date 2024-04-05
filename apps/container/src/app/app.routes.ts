import { Route } from '@angular/router';
import { HomeComponent } from '@project-phoenix/container/container-ui';

export const appRoutes: Route[] = [
  {
    path: 'life-tracker',
    loadChildren: () =>
      import('life-tracker/Routes').then((m) => m.remoteRoutes),
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'resume',
    loadChildren: () => import('resume/Routes').then((m) => m.remoteRoutes),
  },
  {
    path: 'code-master',
    loadChildren: () =>
      import('code-master/Routes').then((m) => m.remoteRoutes),
  },
  { path: '', pathMatch: 'full', redirectTo: '/home' },
];

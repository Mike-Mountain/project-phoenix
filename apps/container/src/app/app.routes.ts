import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'resume',
    loadChildren: () => import('resume/Routes').then((m) => m.remoteRoutes)
  },
  {
    path: 'code-master',
    loadChildren: () =>
      import('code-master/Routes').then((m) => m.remoteRoutes)
  }
];

import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'code-master',
    loadChildren: () =>
      import('code-master/Routes').then((m) => m.remoteRoutes),
  },
];

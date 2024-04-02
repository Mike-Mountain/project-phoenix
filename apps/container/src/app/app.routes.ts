import { Route } from '@angular/router';
import { loadRemoteModule } from '@nx/angular/mf';

export const appRoutes: Route[] = [
  {
    path: 'resume',
    loadChildren: () => loadRemoteModule('resume', './Routes')
  }
];

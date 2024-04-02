import { Route } from '@angular/router';
import { loadRemoteModule } from '@nx/angular/mf';

export const remoteRoutes: Route[] = [
  { path: '', loadChildren: () => import('@project-phoenix/resume-routing').then(r => r.resumeRoutes) }
];

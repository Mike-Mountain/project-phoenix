import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'resume',
    loadChildren: () => import('@project-phoenix/resume-routing').then(r => r.resumeRoutes)
  }
];

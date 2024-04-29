import { Route } from '@angular/router';

export const remoteRoutes: Route[] = [
  { path: '', loadChildren: () => import('@project-phoenix/budgets/Routing').then(r => r.budgetRoutes) }
];

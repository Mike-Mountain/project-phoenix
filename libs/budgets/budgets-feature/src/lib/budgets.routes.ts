import { Routes } from '@angular/router';
import { BudgetsDashboardComponent } from './components/budgets-dashboard/budgets-dashboard.component';
import { BudgetDetailsComponent } from './components/budget-details/budget-details.component';

export const budgetRoutes: Routes = [
  { path: '', component: BudgetsDashboardComponent },
  { path: 'details/:id', component: BudgetDetailsComponent }
];

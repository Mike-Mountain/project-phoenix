import { Component, inject, TemplateRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from '@project-phoenix/shared/shared-feature';
import { MatCard, MatCardContent, MatCardTitle } from '@angular/material/card';
import {
  MatAccordion,
  MatExpansionPanel,
  MatExpansionPanelHeader,
  MatExpansionPanelTitle
} from '@angular/material/expansion';
import { MatIcon } from '@angular/material/icon';
import { MatButton, MatFabButton } from '@angular/material/button';
import { Budget, DatabaseService, Theme } from '@project-phoenix/shared/shared-data-access';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { from, Observable, tap } from 'rxjs';
import { AddEditBudgetComponent } from '../add-edit-budget/add-edit-budget.component';
import { MatMenu, MatMenuItem, MatMenuTrigger } from '@angular/material/menu';
import { Router } from '@angular/router';
import { ThemeService } from '@project-phoenix/shared/shared-ui';
import { BudgetService } from '../../services/budget/budget.service';

@Component({
  selector: 'budgets-feature-budgets-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    SpinnerComponent,
    MatCard,
    MatCardTitle,
    MatAccordion,
    MatIcon,
    MatFabButton,
    MatCardContent,
    MatButton,
    AddEditBudgetComponent,
    MatExpansionPanel,
    MatExpansionPanelHeader,
    MatExpansionPanelTitle,
    MatMenu,
    MatMenuTrigger,
    MatMenuItem
  ],
  templateUrl: './budgets-dashboard.component.html',
  styleUrl: './budgets-dashboard.component.scss'
})
export class BudgetsDashboardComponent {
  private budgetService = inject(BudgetService);
  private dialog = inject(MatDialog);
  private router = inject(Router);
  private themeService = inject(ThemeService);

  public budgets$: Observable<Budget[]> | undefined;
  public personalBudgets: Budget[] = [];
  public householdBudgets: Budget[] = [];
  public businessBudgets: Budget[] = [];

  public selectedBudget: Budget | undefined;
  public dialogRef: MatDialogRef<any> | undefined;

  constructor() {
    this.themeService.updateTheme(Theme.BUDGETS);
    this.budgetService.getAllBudgets().then(() => {
      this.budgets$ = this.budgetService.getBudgets$().pipe(
        tap(budgets => {
          this.personalBudgets = budgets.filter(budget => budget.budgetType === 'Personal');
          this.householdBudgets = budgets.filter(budget => budget.budgetType === 'Household');
          this.businessBudgets = budgets.filter(budget => budget.budgetType === 'Business');
        })
      );
    });
  }

  addBudget(template: TemplateRef<any>) {
    this.dialogRef = this.dialog.open(template);
  }

  deleteBudget(id: number) {
    this.budgetService.deleteBudget(id);
  }

  openBudget(id: number) {
    this.router.navigateByUrl(`/budgets/details/${id}`);
  }

  openBudgetDialog(template: TemplateRef<any>, budget: Budget) {
    this.selectedBudget = budget;
    this.dialogRef = this.dialog.open(template);
    this.dialogRef.afterClosed().subscribe(() => this.selectedBudget = undefined);
  }

  loadDemoData() {
    this.budgetService.addDemoData();
  }
}

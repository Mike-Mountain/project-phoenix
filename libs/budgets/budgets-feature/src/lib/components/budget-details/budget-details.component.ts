import { Component, inject, TemplateRef } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { MatCard, MatCardContent } from '@angular/material/card';
import { ActivatedRoute } from '@angular/router';
import { from, Observable, switchMap } from 'rxjs';
import { Budget, DatabaseService, Expense, Income } from '@project-phoenix/shared/shared-data-access';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AddEditBudgetItemComponent } from '@project-phoenix/budgets-ui';
import { MatIcon } from '@angular/material/icon';
import { MatMenu, MatMenuTrigger } from '@angular/material/menu';
import { BudgetService } from '../../services/budget/budget.service';
import { MatMiniFabButton } from '@angular/material/button';

@Component({
  selector: 'budgets-feature-budget-details',
  standalone: true,
  imports: [CommonModule, MatCard, MatCardContent, AddEditBudgetItemComponent, MatIcon, MatMenu, MatMenuTrigger, MatMiniFabButton],
  templateUrl: './budget-details.component.html',
  styleUrl: './budget-details.component.scss'
})
export class BudgetDetailsComponent {
  private route = inject(ActivatedRoute);
  private budgetService = inject(BudgetService);
  private dialog = inject(MatDialog);
  private location = inject(Location);

  public selectedItem: (Income | Expense) | undefined;
  public selectedItemType: string | undefined;
  public dialogRef: MatDialogRef<any> | undefined;

  public expenseTotal = this.budgetService.expenseTotal;
  public incomeTotal = this.budgetService.incomeTotal;

  public totalBudgetRemaining = 0;
  public isBalancePositive = false;

  public selectedBudget$: Observable<Budget> = this.budgetService.getSelectedBudget(this.route.params);

  public openDialog(template: TemplateRef<any>, type: 'income' | 'expense', data?: Expense | Income) {
    if (data) {
      this.selectedItemType = type;
      this.selectedItem = data;
    }
    this.dialogRef = this.dialog.open(template, {
      width: '95%'
    });
  }

  public delete(type: 'income' | 'expenses', value: Income | Expense, budget: Budget) {
    this.budgetService.removeIncomeOrExpense(type, value, budget).subscribe(() => {
      // Reset income list
    })
  }

  public goBack() {
    this.location.back();
  }
}

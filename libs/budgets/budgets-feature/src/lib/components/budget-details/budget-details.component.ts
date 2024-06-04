import { Component, inject, TemplateRef } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { MatCard, MatCardContent } from '@angular/material/card';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Budget, Expense, Income } from '@project-phoenix/shared/shared-data-access';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AddEditBudgetItemComponent, BudgetCardComponent } from '@project-phoenix/budgets-ui';
import { MatIcon } from '@angular/material/icon';
import { MatMenu, MatMenuTrigger } from '@angular/material/menu';
import { BudgetService } from '../../services/budget/budget.service';
import { MatButton, MatMiniFabButton } from '@angular/material/button';

@Component({
  selector: 'budgets-feature-budget-details',
  standalone: true,
  imports: [CommonModule, MatCard, MatCardContent, AddEditBudgetItemComponent, MatIcon, MatMenu, MatMenuTrigger, MatMiniFabButton, BudgetCardComponent, MatButton],
  templateUrl: './budget-details.component.html',
  styleUrl: './budget-details.component.scss'
})
export class BudgetDetailsComponent {
  private route = inject(ActivatedRoute);
  private budgetService = inject(BudgetService);
  private dialog = inject(MatDialog);
  private location = inject(Location);

  public selectedItem: (Income | Expense) | undefined;
  public selectedItemType: 'income' | 'expense' | undefined;
  public dialogRef: MatDialogRef<any> | undefined;

  public incomeTotal$ = this.budgetService.getIncomeTotal();
  public expenseTotal$ = this.budgetService.getExpenseTotal();
  public totalBudgetRemaining$ = this.budgetService.getTotalRemaining();

  public selectedBudget$: Observable<Budget> = this.budgetService.getSelectedBudget(this.route.params);

  public openDialog(template: TemplateRef<any>, type: 'income' | 'expense', data?: Expense | Income) {
    if (data) {
      this.selectedItem = data;
    }
    this.selectedItemType = type;
    this.dialogRef = this.dialog.open(template, {
      width: '95%'
    });
  }

  public delete(type: 'income' | 'expenses', value: Income | Expense, budget: Budget) {
    this.budgetService.removeIncomeOrExpense(type, value, budget).subscribe(data => console.log(data));
  }

  public createBudgetItem(item: Income | Expense, budget: Budget) {
    const itemType = 'type' in item ? 'income' : 'expenses';
    this.budgetService.addIncomeOrExpense(itemType, item, budget);
  }

  public deleteBudget(budgetId: number) {
    this.budgetService.deleteBudget(budgetId).then(() => {
      this.goBack();
    });
  }

  public goBack() {
    this.location.back();
  }
}

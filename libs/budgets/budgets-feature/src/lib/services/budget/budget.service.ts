import { inject, Injectable, Signal } from '@angular/core';
import { Params } from '@angular/router';
import { Budget, DatabaseService, Expense, Income } from '@project-phoenix/shared/shared-data-access';
import { from, Observable, switchMap } from 'rxjs';
import { createSignal } from '@angular/core/primitives/signals';

@Injectable({
  providedIn: 'root'
})
export class BudgetService {
  private databaseService = inject(DatabaseService);

  public incomeTotal = createSignal(0);
  public expenseTotal = createSignal(0);

  public getSelectedBudget(params: Observable<Params>) {
    return params.pipe(
      switchMap(params => {
        return from(this.databaseService.getOne('budgets', Number(params['id'])));
      })
    );
  }

  public removeIncomeOrExpense(type: 'income' | 'expenses', value: Income | Expense, budget: Budget) {
    const newVal = budget[type]?.filter(item => item.id === value.id);
    if (newVal) {
      type === 'income' ? budget.income = newVal as Income[] : budget.expenses = newVal as Expense[];
    }
    return from(this.databaseService.put('budgets', budget));
  }

  public deleteSelectedBudget(id: number) {
    return from(this.databaseService.delete('budgets', id));
  }

  public deriveBudgetAmountRemaining(incomeTotal: number, expenseTotal: number) {
    return incomeTotal - expenseTotal;
  }
}

import { inject, Injectable, signal } from '@angular/core';
import { Params } from '@angular/router';
import { Budget, DatabaseService, Expense, Income } from '@project-phoenix/shared/shared-data-access';
import { BehaviorSubject, from, Observable, of, switchMap, tap } from 'rxjs';
import { budgetsDemoData } from '@project-phoenix/budgets-data-access';

@Injectable({
  providedIn: 'root'
})
export class BudgetService {
  private databaseService = inject(DatabaseService);

  private budgets$ = new BehaviorSubject<Budget[]>([]);
  private incomeTotal$ = new BehaviorSubject<number>(0);
  private expenseTotal$ = new BehaviorSubject<number>(0);
  private totalBudgetRemaining$ = new BehaviorSubject<number>(0);

  public getBudgets$() {
    return this.budgets$.asObservable();
  }

  public getAllBudgets() {
    return this.databaseService.getAll('budgets').then(budgets => this.budgets$.next(budgets));
  }

  public getSelectedBudget(params: Observable<Params>) {
    return params.pipe(
      switchMap(params => {
        return from(this.databaseService.getOne('budgets', Number(params['id'])));
      }),
      tap((budget: Budget) => {
        this.incomeTotal$.next(this.deriveTotalFromArray(budget.income || []));
        this.expenseTotal$.next(this.deriveTotalFromArray(budget.expenses || []));
        this.totalBudgetRemaining$.next(this.deriveBudgetAmountRemaining());
      })
    );
  }

  public updateBudget(budget: Budget) {
    return from(this.databaseService.put('budgets', budget)).pipe(
      tap(() => {
        const budgets = this.budgets$.value;
        const index = budgets.map(item => item.id).indexOf(budget.id);
        if (index > -1) {
          budgets[index] = budget;
          this.budgets$.next(budgets);
        }
      })
    );
  }

  public deleteBudget(id: number) {
    return this.databaseService.delete('budgets', id).then(() => {
      const budgets = this.budgets$.value;
      this.budgets$.next(budgets.filter(budget => budget.id !== id));
    });
  }

  public getIncomeTotal() {
    return this.incomeTotal$.asObservable();
  }

  public getExpenseTotal() {
    return this.expenseTotal$.asObservable();
  }

  public getTotalRemaining() {
    return this.totalBudgetRemaining$.asObservable();
  }

  public removeIncomeOrExpense(type: 'income' | 'expenses', value: Income | Expense, budget: Budget) {
    const newVal = budget[type]?.filter(item => item.name !== value.name);
    const totalValue = this.deriveTotalFromArray(newVal as Income[] | Expense[]);
    if (type === 'income') {
      budget.income = newVal as Income[];
      this.incomeTotal$.next(totalValue);
    } else {
      budget.expenses = newVal as Expense[];
      this.expenseTotal$.next(totalValue);
    }
    this.totalBudgetRemaining$.next(this.deriveBudgetAmountRemaining());
    return from(this.databaseService.put('budgets', budget)).pipe(
      switchMap(() => {
        return this.databaseService.getOne('budgets', budget.id);
      })
    );
  }

  public addIncomeOrExpense(type: 'income' | 'expenses', value: Income | Expense, budget: Budget) {
    let items = budget[type];
    if (!items) {
      items = [];
    }
    items.push(value as Income & Expense);
    const totalValue = this.deriveTotalFromArray(items);
    if (type === 'income') {
      budget.income = items as Income[];
      this.incomeTotal$.next(totalValue);
    } else {
      budget.expenses = items as Expense[];
      this.expenseTotal$.next(totalValue);
    }
    this.totalBudgetRemaining$.next(this.deriveBudgetAmountRemaining());
    return from(this.databaseService.put('budgets', budget)).pipe(
      switchMap(() => {
        return this.databaseService.getOne('budgets', budget.id);
      })
    );
  }

  public deriveBudgetAmountRemaining() {
    return this.incomeTotal$.value - this.expenseTotal$.value;
  }

  public addDemoData() {
    const data = budgetsDemoData;
    this.budgets$.next(data);
    const promises = [];
    return new Promise(resolve => {
      data.forEach(budget => {
        promises.push(this.databaseService.put('budgets', budget));
      });
    });
  }

  // TODO: Move to utils
  private deriveTotalFromArray(items: Income[] | Expense[]) {
    if (items.length === 0) {
      return 0;
    }
    return items.map(item => item.amount).reduce((accumulator, currentValue) => accumulator + currentValue);
  }
}

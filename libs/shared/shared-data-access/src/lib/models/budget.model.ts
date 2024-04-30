export enum BudgetDuration {
  DAY = 'day',
  WEEK = 'week',
  MONTH = 'month',
  YEAR = 'year'
}

export interface Income {
  id: string;
  amount: number;
  budgetId: string;
  name: string;
  type: string;
}

export interface Expense {
  id: number;
  amount: number;
  budgetId: string;
  name: string;
}

export interface Budget {
  id: number;
  budgetType: string;
  duration: BudgetDuration;
  expenses?: Array<Expense>;
  income?: Array<Income>;
  name: string;
}

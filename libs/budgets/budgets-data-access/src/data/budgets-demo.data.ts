import { Budget, BudgetDuration } from '@project-phoenix/shared/shared-data-access';

export const budgetsDemoData: Budget[] = [
  {
    id: 1,
    name: 'Personal Budget',
    budgetType: 'Personal',
    income: [
      {
        id: '1',
        amount: 30000,
        budgetId: '1',
        name: 'Salary',
        type: 'income'
      },
      {
        id: '2',
        amount: 6500,
        budgetId: '1',
        name: 'Side hustle',
        type: 'income'
      }
    ],
    expenses: [
      {
        id: 1,
        amount: 7500,
        budgetId: '1',
        name: 'Rent'
      },
      {
        id: 2,
        amount: 3000,
        budgetId: '1',
        name: 'Groceries'
      },
      {
        id: 3,
        amount: 3346.50,
        budgetId: '1',
        name: 'Car payment'
      },
      {
        id: 4,
        amount: 1350,
        budgetId: '1',
        name: 'Car insurance'
      },
      {
        id: 5,
        amount: 3247,
        budgetId: '1',
        name: 'Medical Aid'
      },
      {
        id: 5,
        amount: 3000,
        budgetId: '1',
        name: 'Retirement'
      },
    ],
    duration: BudgetDuration.MONTH
  },
  {
    id: 2,
    name: 'Business Budget',
    budgetType: 'Business',
    income: [
      {
        id: '1',
        amount: 250000,
        budgetId: '2',
        name: 'Revenue',
        type: 'income'
      },
      {
        id: '2',
        amount: 1000000,
        budgetId: '2',
        name: 'Funding',
        type: 'income'
      }
    ],
    expenses: [
      {
        id: 1,
        amount: 350000,
        budgetId: '2',
        name: 'Salaries'
      },
      {
        id: 2,
        amount: 150000,
        budgetId: '2',
        name: 'Offices'
      },
      {
        id: 3,
        amount: 250000,
        budgetId: '1',
        name: 'Servers'
      },
      {
        id: 4,
        amount: 10000,
        budgetId: '1',
        name: 'Insurance'
      }
    ],
    duration: BudgetDuration.MONTH
  },
  {
    id: 3,
    name: 'Household Budget',
    budgetType: 'Household',
    income: [
      {
        id: '1',
        amount: 6000,
        budgetId: '3',
        name: 'House Account',
        type: 'income'
      }
    ],
    expenses: [
      {
        id: 1,
        amount: 3000,
        budgetId: '3',
        name: 'Groceries'
      },
      {
        id: 2,
        amount: 1400,
        budgetId: '3',
        name: 'Electricity'
      },
      {
        id: 1,
        amount: 600,
        budgetId: '3',
        name: 'Entertainment'
      }
    ],
    duration: BudgetDuration.MONTH
  }
];

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'budgets-ui-budget-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './budget-card.component.html',
  styleUrl: './budget-card.component.scss',
})
export class BudgetCardComponent {}

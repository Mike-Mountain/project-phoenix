import { Component, EventEmitter, Input, Output, signal, Signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCard, MatCardContent } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import { MatMenu, MatMenuItem, MatMenuTrigger } from '@angular/material/menu';
import { MatMiniFabButton } from '@angular/material/button';
import { Expense, Income } from '@project-phoenix/shared/shared-data-access';
import { MatRipple } from '@angular/material/core';

@Component({
  selector: 'budgets-ui-budget-card',
  standalone: true,
  imports: [CommonModule, MatCard, MatCardContent, MatIcon, MatMenu, MatMiniFabButton, MatMenuTrigger, MatMenuItem, MatRipple],
  templateUrl: './budget-card.component.html',
  styleUrl: './budget-card.component.scss'
})
export class BudgetCardComponent {
  @Input() itemType = '';
  @Input() budgetItems: Income[] | Expense[] = [];
  @Input() totalAmount: number | null = 0;

  @Output() addEdit = new EventEmitter<{ type: 'add' | 'edit' | 'detail', data?: Income | Expense }>();
  @Output() deleteItem = new EventEmitter<Income | Expense>();

  openDialog(type: 'add' | 'edit' | 'detail', data?: Income | Expense) {
    this.addEdit.emit({ type, data });
  }

  delete(item: Income | Expense) {
    this.deleteItem.emit(item);
  }
}

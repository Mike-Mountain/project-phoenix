import { Component, EventEmitter, inject, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatDialogContent, MatDialogRef } from '@angular/material/dialog';
import { MatFormField } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatButton } from '@angular/material/button';
import { Expense, Income } from '@project-phoenix/shared/shared-data-access';
import { MatOption, MatSelect } from '@angular/material/select';

@Component({
  selector: 'budgets-ui-add-edit-budget-item',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatDialogContent, MatFormField, MatInput, MatButton, MatSelect, MatOption],
  templateUrl: './add-edit-budget-item.component.html',
  styleUrl: './add-edit-budget-item.component.scss'
})
export class AddEditBudgetItemComponent implements OnInit, OnDestroy {
  private formBuilder = inject(FormBuilder);

  @Input() budgetId: number | undefined;
  @Input() dialogRef: MatDialogRef<any> | undefined;
  @Input() type: 'income' | 'expense' | undefined;
  @Input() item?: Income | Expense;

  @Output() createItem = new EventEmitter<Income | Expense>();

  public itemForm: FormGroup<any> | undefined;

  ngOnInit() {
    console.log((this.type));
    this.itemForm = this.createForm();
    if (this.type === 'income') {
      const control = new FormControl((this.item as Income)?.type);
      this.itemForm.addControl('type', control);
    }
  }

  ngOnDestroy() {
    this.itemForm = new FormGroup<any>({});
  }

  public createNewBudgetItem() {
    if (this.itemForm) {
      this.createItem.emit(this.itemForm.value);
      this.closeDialog();
    }
  }

  public closeDialog() {
    this.dialogRef?.close();
  }

  private createForm() {
    return this.formBuilder.group({
      name: [this.item?.name, Validators.required],
      amount: [this.item?.amount, Validators.required]
      // categoryName: [this.expense.categoryName, Validators.required],
      // dueDate: [this.expense.dueDate],
      // isPaid: [this.expense.isPaid],
      // isRecurring: [this.expense.isRecurring],
    });
  }
}

import { Component, inject, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogRef } from '@angular/material/dialog';
import { Budget, DatabaseService } from '@project-phoenix/shared/shared-data-access';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatButton } from '@angular/material/button';
import { MatOption, MatSelect } from '@angular/material/select';
import { BudgetService } from '../../services/budget/budget.service';

@Component({
  selector: 'budgets-feature-add-edit-budget',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatFormField, MatInput, MatButton, MatSelect, MatOption, MatLabel],
  templateUrl: './add-edit-budget.component.html',
  styleUrl: './add-edit-budget.component.scss'
})
export class AddEditBudgetComponent implements OnInit {
  @Input() dialogRef: MatDialogRef<any> | undefined;
  @Input() budget?: Budget;

  private formBuilder = inject(FormBuilder);
  private router = inject(Router);
  private budgetService = inject(BudgetService);

  public budgetForm: FormGroup | undefined;

  constructor() {

  }

  ngOnInit() {
    this.budgetForm = this.formBuilder.group({
      name: [this.budget?.name, Validators.required],
      budgetType: [this.budget?.budgetType, Validators.required],
      duration: [this.budget?.duration, Validators.required]
    });
  }

  public addUpdateBudget() {
    if (this.budgetForm && !this.budgetForm.hasError('required')) {
      const budget = { ...this.budget, ...this.budgetForm.value };
      this.budgetService.updateBudget(budget).subscribe((id) => {
        this.closeDialog();
        this.router.navigateByUrl(`/budgets/details/${id}`);
      });
    }
  }

  public closeDialog() {
    this.dialogRef?.close();
  }
}

import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Category, CreateList, ListService } from '@project-phoenix/lists-data-access';
import { FormArray, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatAutocomplete, MatAutocompleteTrigger, MatOption } from '@angular/material/autocomplete';
import { MatButton } from '@angular/material/button';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MAT_DIALOG_DATA, MatDialogClose, MatDialogRef } from '@angular/material/dialog';
import { AsPipe } from '@project-phoenix/shared/shared-util';


@Component({
  selector: 'groups-ui-list-dialog',
  standalone: true,
  imports: [CommonModule, FormsModule, MatAutocompleteTrigger, MatButton, MatFormField, MatInput, MatLabel, ReactiveFormsModule, MatDialogClose, MatAutocomplete, MatOption, AsPipe],
  templateUrl: './list-dialog.component.html',
  styleUrl: './list-dialog.component.scss'
})
export class ListDialogComponent {
  private listService = inject(ListService);
  private formBuilder = inject(FormBuilder);
  private dialogRef = inject(MatDialogRef<ListDialogComponent>);
  public data = inject(MAT_DIALOG_DATA);

  public addingItems = false;
  public categories: Category[] = [];
  public listItemForm = this.createListItemForm();
  public listForm = this.formBuilder.group({
    name: ['', Validators.required],
    items: this.formBuilder.array([])
  });

  constructor() {
    this.dialogRef.updateSize('90%');
  }


  public addListItem() {
    const itemForm = this.createListItemForm();
    itemForm.setValue(this.listItemForm.value);
    (this.listForm.get('items') as FormArray).push(itemForm);
    this.listItemForm.reset();
  }

  public saveList() {
    this.listService.createList((this.listForm.value as CreateList), this.data.username, this.data.groupId);
    this.dialogRef.close();
  }

  private createListItemForm(): FormGroup {
    return this.formBuilder.group({
      name: ['', Validators.required],
      category: ['', Validators.required]
    });
  }
}

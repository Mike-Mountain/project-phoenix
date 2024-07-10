import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormField, MatHint, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { debounce, interval, of, switchMap } from 'rxjs';
import { Category, CreateListItem, List, ListItem, ListService } from '@project-phoenix/lists-data-access';
import { MatCard, MatCardContent } from '@angular/material/card';
import { MatOption, MatSelect } from '@angular/material/select';
import { MatAutocomplete, MatAutocompleteTrigger } from '@angular/material/autocomplete';
import { MatButton } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialog, MatDialogClose, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'lists-ui-list-item-dialog',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatFormField, MatInput, MatLabel, MatCard, MatCardContent, MatHint, MatSelect, MatOption, MatAutocomplete, MatAutocompleteTrigger, MatButton, MatDialogClose],
  templateUrl: './list-item-dialog.component.html',
  styleUrl: './list-item-dialog.component.scss'
})
export class ListItemDialogComponent implements OnInit {
  private data = inject<{ listId: number, username: string }>(MAT_DIALOG_DATA);
  private dialog = inject(MatDialogRef);
  private formBuilder = inject(FormBuilder);
  private listService = inject(ListService);

  public categories: Category[] = [];
  public listItemForm = this.formBuilder.group({
    name: ['', Validators.required],
    category: ['', Validators.required]
  });

  ngOnInit() {
    this.listItemForm.get('category')?.valueChanges
      .pipe(
        debounce(() => interval(1500)),
        switchMap((categoryName) => {
          if (categoryName) {
            return this.listService.getCategories(categoryName);
          } else {
            return of([]);
          }
        })
      )
      .subscribe(categories => {
        this.categories = categories;
      });
  }

  addListItem() {
    console.log('adding list item!');
    if (this.listItemForm) {
      const listItem: CreateListItem = {
        createdBy: this.data.username,
        isComplete: false,
        name: this.listItemForm.value.name!,
        list: this.data.listId,
        category: this.listItemForm.value.category!
      };
      this.listService.addListItem(this.data.listId, listItem).subscribe(data => {
        console.log(data);
        this.dialog.close(data);
      });
    }
  }
}

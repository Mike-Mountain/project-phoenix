import { Component, inject } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Observable, switchMap, tap } from 'rxjs';
import { List, ListItem, ListService } from '@project-phoenix/lists-data-access';
import { MatToolbar } from '@angular/material/toolbar';
import { MatCard, MatCardContent } from '@angular/material/card';
import { MatCheckbox, MatCheckboxChange } from '@angular/material/checkbox';
import { UserIconPipe } from '@project-phoenix/shared/shared-util';
import { MatButton, MatFabButton } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatIcon } from '@angular/material/icon';
import { ListItemDialogComponent } from '@project-phoenix/lists-ui';
import { AuthService } from '@project-phoenix/shared/shared-data-access';

@Component({
  selector: 'lists-feature-list-details',
  standalone: true,
  imports: [CommonModule, MatToolbar, MatCard, MatCardContent, MatCheckbox, UserIconPipe, MatFabButton, MatIcon, MatButton],
  templateUrl: './list-details.component.html',
  styleUrl: './list-details.component.scss'
})
export class ListDetailsComponent {
  private route = inject(ActivatedRoute);
  private location = inject(Location);
  private listService = inject(ListService);
  private userService = inject(AuthService);
  private dialog = inject(MatDialog);

  public list$: Observable<List> | undefined;

  constructor() {
    this.list$ = this.route.params.pipe(
      switchMap(params => {
        return this.listService.getList(params['id']);
      })
    );
  }

  toggleIsComplete(item: ListItem, change: MatCheckboxChange) {
    item.isComplete = change.checked;
    this.listService.toggleIsComplete(item.id, change.checked).subscribe();
  }

  openListItemDialog(listId: number) {
    this.dialog.open(ListItemDialogComponent, {data: {listId, username: this.userService.username}})
  }

  goBack() {
    this.location.back();
  }
}

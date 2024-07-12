import { Component, EventEmitter, inject, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCard, MatCardContent, MatCardHeader, MatCardTitle } from '@angular/material/card';
import { MatButton } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { Group, GroupsService } from '@project-phoenix/groups-data-access';
import { Observable, take } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { List } from '@project-phoenix/lists-data-access';
import { InfoDialogComponent } from '@project-phoenix/shared/shared-ui';

@Component({
  selector: 'groups-feature-group-summary',
  standalone: true,
  imports: [CommonModule, MatCard, MatCardContent, MatCardHeader, MatCardTitle, MatButton, RouterLink],
  templateUrl: './group-summary.component.html',
  styleUrl: './group-summary.component.scss'
})
export class GroupSummaryComponent implements OnChanges {
  @Input() groupId: number | undefined;
  @Output() exit = new EventEmitter();

  private groupsService = inject(GroupsService);
  private dialog = inject(MatDialog);

  public group$: Observable<Group> | undefined;

  ngOnChanges() {
    this.group$ = this.groupsService.getSelectedGroup(this.groupId);
  }

  openConfirmDialog() {
    const data = {
      content: 'Are you sure you want to leave this group?',
      buttons: true
    };
    this.dialog.open(InfoDialogComponent, { data })
      .afterClosed()
      .pipe(take(1))
      .subscribe(confirmed => {
        if (confirmed) {
          this.exit.emit();
        }
      });
  }
}

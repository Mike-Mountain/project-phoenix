import { Component, EventEmitter, inject, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCard, MatCardContent, MatCardHeader, MatCardTitle } from '@angular/material/card';
import { MatButton } from '@angular/material/button';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Group, GroupsService } from '@project-phoenix/groups-data-access';
import { Observable, take } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { List, ListService } from '@project-phoenix/lists-data-access';
import { InfoDialogComponent } from '@project-phoenix/shared/shared-ui';

@Component({
  selector: 'groups-feature-group-summary',
  standalone: true,
  imports: [CommonModule, MatCard, MatCardContent, MatCardHeader, MatCardTitle, MatButton, RouterLink],
  templateUrl: './group-summary.component.html',
  styleUrl: './group-summary.component.scss'
})
export class GroupSummaryComponent implements OnChanges {
  @Input() groupId = 0;
  @Output() exit = new EventEmitter();

  private groupsService = inject(GroupsService);
  private listService = inject(ListService);
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  private dialog = inject(MatDialog);

  public group$ = this.groupsService.getSelectedGroup();

  ngOnChanges() {
    this.groupsService.fetchGroupById(this.groupId);
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

  routeToList(id?: number) {
    if (id) {
      this.listService.fetchListById(id);
      this.router.navigate(['list'], { relativeTo: this.route });
    }
  }

  routeToManageGroup(id: number) {
    this.groupsService.fetchGroupById(id);
    this.router.navigate(['manage-group'], { relativeTo: this.route });
  }
}

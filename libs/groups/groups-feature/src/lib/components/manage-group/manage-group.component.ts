import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { GroupsService } from '@project-phoenix/groups-data-access';
import { switchMap, take, tap } from 'rxjs';
import { MatToolbar } from '@angular/material/toolbar';
import { MatCard, MatCardContent } from '@angular/material/card';
import { MatButton, MatFabButton } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from '@project-phoenix/shared/shared-data-access';
import { ListDialogComponent } from '@project-phoenix/groups-ui';
import { MatIcon } from '@angular/material/icon';
import {
  MemberDialogComponent
} from '../../../../../groups-ui/src/lib/components/member-dialog/member-dialog.component';

@Component({
  selector: 'groups-feature-manage-group',
  standalone: true,
  imports: [CommonModule, MatToolbar, MatCard, MatCardContent, MatButton, RouterLink, MatFabButton, MatIcon],
  templateUrl: './manage-group.component.html',
  styleUrl: './manage-group.component.scss'
})
export class ManageGroupComponent {
  private route = inject(ActivatedRoute);
  private groupService = inject(GroupsService);
  private authService = inject(AuthService);
  private dialog = inject(MatDialog);

  public group$ = this.route.params
    .pipe(
      switchMap(params => {
        return this.groupService.getSelectedGroup(params['id']);
      })
    );

  public openCreateListDialog(groupId: number) {
    const data = {
      groupId,
      username: this.authService.username
    };
    this.dialog.open(ListDialogComponent, { data }).afterClosed()
      .pipe(take(1))
      .subscribe(response => {
        if (response) {
          this.group$ = this.groupService.getSelectedGroup(groupId);
        }
      });
  }

  openAddMemberDialog(groupId: number) {
    const data = {
      groupId,
      username: this.authService.username
    };
    this.dialog.open(MemberDialogComponent, { data }).afterClosed()
      .pipe(take(1))
      .subscribe(data => console.log(data));
  }
}

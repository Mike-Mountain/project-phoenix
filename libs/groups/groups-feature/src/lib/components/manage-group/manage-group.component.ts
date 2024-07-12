import { Component, inject } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { GroupsService } from '@project-phoenix/groups-data-access';
import { switchMap, take, tap } from 'rxjs';
import { MatToolbar } from '@angular/material/toolbar';
import { MatCard, MatCardContent } from '@angular/material/card';
import { MatButton, MatFabButton, MatIconButton, MatMiniFabButton } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { AuthService, User } from '@project-phoenix/shared/shared-data-access';
import { ListDialogComponent } from '@project-phoenix/groups-ui';
import { MatIcon } from '@angular/material/icon';
import { MemberDialogComponent } from '@project-phoenix/groups-ui';
import { List } from '@project-phoenix/lists-data-access';
import { InfoDialogComponent } from '@project-phoenix/shared/shared-ui';

@Component({
  selector: 'groups-feature-manage-group',
  standalone: true,
  imports: [CommonModule, MatToolbar, MatCard, MatCardContent, MatButton, RouterLink, MatFabButton, MatIcon, MatIconButton, MatMiniFabButton],
  templateUrl: './manage-group.component.html',
  styleUrl: './manage-group.component.scss'
})
export class ManageGroupComponent {
  private route = inject(ActivatedRoute);
  private location = inject(Location);
  private groupService = inject(GroupsService);
  private authService = inject(AuthService);
  private dialog = inject(MatDialog);

  public username = this.authService.username;
  public group$ = this.route.params
    .pipe(
      switchMap(params => {
        return this.groupService.getSelectedGroup(params['id']);
      })
    );

  public openCreateListDialog(groupId: number) {
    const data = {
      groupId,
      username: this.username
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
      username: this.username
    };
    this.dialog.open(MemberDialogComponent, { data }).afterClosed()
      .pipe(take(1))
      .subscribe(data => console.log(data));
  }

  openConfirmListDialog(list: Partial<List>) {
    const data = {
      content: 'Are you sure you want to delete this list?',
      buttons: true
    }
    this.dialog.open(InfoDialogComponent, {data})
      .afterClosed()
      .pipe(take(1))
      .subscribe(confirmed => {
        if (confirmed) {
          this.deleteList(list)
        }
      })
  }

  openConfirmMemberDialog(member: Partial<User>) {
    const data = {
      content: 'Are you sure you want to remove this member?',
      buttons: true
    }
    this.dialog.open(InfoDialogComponent, {data})
      .afterClosed()
      .pipe(take(1))
      .subscribe(confirmed => {
        if (confirmed) {
          console.log("removing member!");
        }
      })
  }

  deleteList(list: Partial<List>) {

  }

  goBack() {
    this.location.back();
  }
}

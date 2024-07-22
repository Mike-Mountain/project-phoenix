import { Component, inject } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { GroupsService } from '@project-phoenix/groups-data-access';
import { of, switchMap, take, tap } from 'rxjs';
import { MatToolbar } from '@angular/material/toolbar';
import { MatCard, MatCardContent } from '@angular/material/card';
import { MatButton, MatFabButton, MatIconButton, MatMiniFabButton } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { AuthService, User } from '@project-phoenix/shared/shared-data-access';
import { ListDialogComponent } from '@project-phoenix/groups-ui';
import { MatIcon } from '@angular/material/icon';
import { MemberDialogComponent } from '@project-phoenix/groups-ui';
import { List, ListService } from '@project-phoenix/lists-data-access';
import { InfoDialogComponent } from '@project-phoenix/shared/shared-ui';

@Component({
  selector: 'groups-feature-manage-group',
  standalone: true,
  imports: [CommonModule, MatToolbar, MatCard, MatCardContent, MatButton, RouterLink, MatFabButton, MatIcon, MatIconButton, MatMiniFabButton],
  templateUrl: './manage-group.component.html',
  styleUrl: './manage-group.component.scss'
})
export class ManageGroupComponent {
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  private location = inject(Location);
  private groupService = inject(GroupsService);
  private authService = inject(AuthService);
  private listsService = inject(ListService);
  private dialog = inject(MatDialog);

  public username = this.authService.username;
  public group$ = this.groupService.getSelectedGroup();

  public openCreateListDialog(groupId: number) {
    const data = {
      groupId,
      username: this.username
    };
    this.dialog.open(ListDialogComponent, { data }).afterClosed()
      .pipe(take(1))
      .subscribe(response => {
        if (response) {
          this.groupService.fetchGroupById(groupId);
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
    };
    this.dialog.open(InfoDialogComponent, { data })
      .afterClosed()
      .pipe(take(1))
      .subscribe(confirmed => {
        if (confirmed) {
          this.deleteList(list);
        }
      });
  }

  routeToList(id: number | undefined) {
    if (id) {
      this.listsService.fetchListById(id);
      this.router.navigate(['list'], { relativeTo: this.route.parent });
    }
  }

  openConfirmMemberDialog(username: string, groupId: number) {
    const data = {
      content: 'Are you sure you want to remove this member?',
      buttons: true
    };
    this.dialog.open(InfoDialogComponent, { data })
      .afterClosed()
      .pipe(take(1))
      .subscribe(confirmed => {
        if (confirmed) {
          this.groupService.exitGroup(groupId, username);
        }
      });
  }

  deleteList(list: Partial<List>) {
    this.listsService.deleteList(list.id!);
  }

  goBack() {
    this.location.back();
  }

}

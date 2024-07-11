import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { GroupsService } from '@project-phoenix/groups-data-access';
import { switchMap, tap } from 'rxjs';
import { MatToolbar } from '@angular/material/toolbar';
import { MatCard, MatCardContent } from '@angular/material/card';
import { MatButton } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from '@project-phoenix/shared/shared-data-access';
import { ListDialogComponent } from '@project-phoenix/groups-ui';

@Component({
  selector: 'groups-feature-manage-group',
  standalone: true,
  imports: [CommonModule, MatToolbar, MatCard, MatCardContent, MatButton],
  templateUrl: './manage-group.component.html',
  styleUrl: './manage-group.component.scss',
})
export class ManageGroupComponent {
  private route = inject(ActivatedRoute);
  private groupService = inject(GroupsService);
  private authService = inject(AuthService);
  private dialog = inject(MatDialog);

  public group$ = this.route.params
    .pipe(
      switchMap(params => {
        return this.groupService.getSelectedGroup(params['id'])
      })
    )

  public openCreateListDialog(groupId: number) {
    const data = {
      groupId,
      username: this.authService.username
    }
    this.dialog.open(ListDialogComponent, { data })
  }
}

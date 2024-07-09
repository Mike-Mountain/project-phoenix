import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '@project-phoenix/shared/shared-data-access';
import { MatCard, MatCardContent } from '@angular/material/card';
import { MatFabButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { MatTab, MatTabGroup } from '@angular/material/tabs';
import { GroupSummaryComponent } from '../group-summary/group-summary.component';
import { GroupsService } from '@project-phoenix/groups-data-access';
import { group } from '@angular/animations';

@Component({
  selector: 'groups-feature-groups-dashboard',
  standalone: true,
  imports: [CommonModule, MatCard, MatCardContent, MatFabButton, MatIcon, RouterLink, MatTabGroup, MatTab, GroupSummaryComponent],
  templateUrl: './groups-dashboard.component.html',
  styleUrl: './groups-dashboard.component.scss',
})
export class GroupsDashboardComponent {
  private authService = inject(AuthService)
  private groupService = inject(GroupsService);

  public user$ = this.authService.getUser();

  exitGroup(groupId: number, username: string) {
    this.groupService.exitGroup(groupId, username).subscribe(() => {
      this.authService.fetchUser(username).subscribe();
    });
  }

  protected readonly group = group;
}

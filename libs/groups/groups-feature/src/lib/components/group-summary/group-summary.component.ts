import { Component, EventEmitter, inject, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCard, MatCardContent, MatCardHeader, MatCardTitle } from '@angular/material/card';
import { MatButton } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { Group, GroupsService } from '@project-phoenix/groups-data-access';
import { Observable } from 'rxjs';

@Component({
  selector: 'groups-feature-group-summary',
  standalone: true,
  imports: [CommonModule, MatCard, MatCardContent, MatCardHeader, MatCardTitle, MatButton, RouterLink],
  templateUrl: './group-summary.component.html',
  styleUrl: './group-summary.component.scss',
})
export class GroupSummaryComponent implements OnChanges {
  @Input() groupId: number | undefined;
  @Output() exit = new EventEmitter();

  private groupsService = inject(GroupsService);

  public group$: Observable<Group> | undefined;

  ngOnChanges() {
    this.group$ = this.groupsService.getSelectedGroup(this.groupId);
  }

  exitGroup() {
    this.exit.emit();
  }
}

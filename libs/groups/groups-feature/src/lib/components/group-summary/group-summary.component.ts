import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCard, MatCardContent, MatCardHeader, MatCardTitle } from '@angular/material/card';
import { MatButton } from '@angular/material/button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'groups-feature-group-summary',
  standalone: true,
  imports: [CommonModule, MatCard, MatCardContent, MatCardHeader, MatCardTitle, MatButton, RouterLink],
  templateUrl: './group-summary.component.html',
  styleUrl: './group-summary.component.scss',
})
export class GroupSummaryComponent {
  @Input() groupSummary: any; // TODO: Create group summary model
  @Output() exit = new EventEmitter();

  exitGroup() {
    this.exit.emit();
  }
}

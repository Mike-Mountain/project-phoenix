import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCard, MatCardContent } from '@angular/material/card';
import { History } from '@project-mike/resume/resume-data-access';

@Component({
  selector: 'resume-ui-work-history-card',
  standalone: true,
  imports: [CommonModule, MatCard, MatCardContent],
  templateUrl: './work-history-card.component.html',
  styleUrl: './work-history-card.component.scss'
})
export class WorkHistoryCardComponent {
  @Input() workHistory: History | undefined;
}

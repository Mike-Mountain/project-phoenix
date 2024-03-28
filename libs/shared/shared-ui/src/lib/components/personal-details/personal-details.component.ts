import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCard, MatCardContent } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import { PersonalDetails } from '@project-mike/shared/shared-data-access';

@Component({
  selector: 'shared-ui-personal-details',
  standalone: true,
  imports: [CommonModule, MatCard, MatCardContent, MatIcon],
  templateUrl: './personal-details.component.html',
  styleUrl: './personal-details.component.scss'
})
export class PersonalDetailsComponent {
  @Input() details: PersonalDetails | undefined;
  @Input() isHome = false;
}

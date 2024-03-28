import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatChip} from "@angular/material/chips";
import {AsPipe} from "@project-mike/shared/shared-util";

@Component({
  selector: 'shared-ui-list-display',
  standalone: true,
  imports: [CommonModule, MatChip, AsPipe],
  templateUrl: './list-display.component.html',
  styleUrl: './list-display.component.scss',
})
export class ListDisplayComponent {
  @Input() selectedEntry: any[] = [];
  @Input() label: string = '';
}

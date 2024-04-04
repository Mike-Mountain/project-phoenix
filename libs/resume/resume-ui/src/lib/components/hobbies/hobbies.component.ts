import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatChip} from "@angular/material/chips";

@Component({
  selector: 'resume-ui-hobbies',
  standalone: true,
  imports: [CommonModule, MatChip],
  templateUrl: './hobbies.component.html',
  styleUrl: './hobbies.component.scss',
})
export class HobbiesComponent {

  @Input() hobbies: string[] = [];
}

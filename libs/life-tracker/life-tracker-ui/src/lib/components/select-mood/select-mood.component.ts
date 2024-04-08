import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCard, MatCardContent } from '@angular/material/card';
import { moodOptions } from '@project-phoenix/life-tracker-data-access';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'life-tracker-ui-select-mood',
  standalone: true,
  imports: [CommonModule, MatCard, MatCardContent, MatButton],
  templateUrl: './select-mood.component.html',
  styleUrl: './select-mood.component.scss'
})
export class SelectMoodComponent {
  @Input() mood?: string;
  @Output() selectedMood = new EventEmitter<string>;

  public moods = moodOptions;

  selectMood(mood: string) {
    this.mood = mood;
    this.selectedMood.emit(mood);
  }
}

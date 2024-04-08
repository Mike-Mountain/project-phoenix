import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrackerHomeComponent } from '@project-phoenix/life-tracker-feature';

@Component({
  standalone: true,
  imports: [CommonModule, TrackerHomeComponent],
  selector: 'app-life-tracker-entry',
  template: `<life-tracker-feature-tracker-home></life-tracker-feature-tracker-home>`,
})
export class RemoteEntryComponent {}

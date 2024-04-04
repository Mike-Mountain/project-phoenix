import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResumeContainerComponent } from '@project-phoenix/resume-feature';

@Component({
  standalone: true,
  imports: [CommonModule, ResumeContainerComponent],
  selector: 'app-resume-entry',
  template: `<resume-feature-resume-container></resume-feature-resume-container>`
})
export class RemoteEntryComponent {
}

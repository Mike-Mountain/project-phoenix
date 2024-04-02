import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameContainerComponent } from '@project-phoenix/code-master/code-master-feature';

@Component({
  standalone: true,
  imports: [CommonModule, GameContainerComponent],
  selector: 'app-code-master-entry',
  template: `<code-master-feature-game-container></code-master-feature-game-container>`,
})
export class RemoteEntryComponent {}

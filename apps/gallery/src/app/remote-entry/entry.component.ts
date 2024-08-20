import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  selector: 'app-gallery-entry',
  template: `console.log('test')<router-outlet></router-outlet>`,
})
export class RemoteEntryComponent {}

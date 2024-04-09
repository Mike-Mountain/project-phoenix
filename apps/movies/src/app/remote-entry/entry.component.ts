import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesHomeComponent } from '@project-phoenix/movies-ui';

@Component({
  standalone: true,
  imports: [CommonModule, MoviesHomeComponent],
  selector: 'app-movies-entry',
  template: `<movies-ui-movies-home></movies-ui-movies-home>`,
})
export class RemoteEntryComponent {}

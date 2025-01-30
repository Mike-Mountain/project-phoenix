import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from '@project-phoenix/shared/shared-ui';
import { Theme } from '@project-phoenix/shared/shared-data-access';
import { MatButton, MatFabButton, MatIconButton } from '@angular/material/button';

@Component({
  selector: 'archery-feature-archery-dashboard',
  standalone: true,
  imports: [CommonModule, MatButton, MatIconButton, MatFabButton],
  templateUrl: './archery-dashboard.component.html',
  styleUrl: './archery-dashboard.component.scss',
})
export class ArcheryDashboardComponent implements OnInit {
  private themeService = inject(ThemeService);

  ngOnInit() {
    this.themeService.updateTheme(Theme.ARCHERY);
  }
}

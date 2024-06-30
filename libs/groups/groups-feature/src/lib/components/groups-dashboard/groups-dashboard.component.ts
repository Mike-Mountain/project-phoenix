import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '@project-phoenix/shared/shared-data-access';
import { MatCard, MatCardContent } from '@angular/material/card';
import { MatFabButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'groups-feature-groups-dashboard',
  standalone: true,
  imports: [CommonModule, MatCard, MatCardContent, MatFabButton, MatIcon, RouterLink],
  templateUrl: './groups-dashboard.component.html',
  styleUrl: './groups-dashboard.component.scss',
})
export class GroupsDashboardComponent {
  private authService = inject(AuthService)
  public user$ = this.authService.getUser();
}

import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCard, MatCardContent } from '@angular/material/card';
import { PersonalDetailsComponent, ThemeService } from '@project-phoenix/shared/shared-ui';
import { homeDetails, PersonalDetails, Theme } from '@project-phoenix/shared/shared-data-access';
import { ToolbarService } from '@project-phoenix/shared/shared-util';

@Component({
  selector: 'container-ui-home',
  standalone: true,
  imports: [CommonModule, MatCard, MatCardContent, PersonalDetailsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  public personalDetails: PersonalDetails = homeDetails;

  private toolbarService = inject(ToolbarService);
  private themeService = inject(ThemeService);

  ngOnInit() {
    this.themeService.updateTheme(Theme.DEFAULT);
    this.toolbarService.updateTitle('Home')
  }
}

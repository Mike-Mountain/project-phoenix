import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCard, MatCardContent } from '@angular/material/card';
import { PersonalDetailsComponent } from '@project-phoenix/shared/shared-ui';
import { homeDetails, PersonalDetails } from '@project-phoenix/shared/shared-data-access';
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

  ngOnInit() {
    this.toolbarService.updateTitle('Home')
  }
}

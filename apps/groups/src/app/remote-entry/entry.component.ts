import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { LayoutComponent } from '@project-phoenix/container/container-ui';
import { AuthService } from '@project-phoenix/shared/shared-data-access';

@Component({
  standalone: true,
  imports: [CommonModule, RouterOutlet, LayoutComponent],
  selector: 'app-groups-entry',
  template: `
    <container-ui-layout [individual]="true"></container-ui-layout>`
})
export class RemoteEntryComponent implements OnInit {
  private authService = inject(AuthService);

  ngOnInit() {
    this.authService.setUser();
  }
}

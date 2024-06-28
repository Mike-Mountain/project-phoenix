import { Component, inject, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LayoutComponent } from '@project-phoenix/container/container-ui';
import { AuthService } from '@project-phoenix/shared/shared-data-access';

@Component({
  standalone: true,
  imports: [RouterModule, LayoutComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  private authService = inject(AuthService);

  ngOnInit() {
    this.authService.setUser();
  }
}

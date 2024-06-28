import { Component, inject } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { ActivatedRoute, Router, RouterLink, RouterOutlet } from '@angular/router';
import { MatRipple } from '@angular/material/core';
import { AuthDialogOptions, AuthService } from '@project-phoenix/shared/shared-data-access';
import { MatDialog } from '@angular/material/dialog';
import { AuthDialogComponent } from '@project-phoenix/shared/shared-ui';

@Component({
  selector: 'container-ui-layout',
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    AsyncPipe,
    RouterOutlet,
    RouterLink,
    MatRipple,
    JsonPipe
  ]
})
export class LayoutComponent {
  private breakpointObserver = inject(BreakpointObserver);
  private authService = inject(AuthService);
  private dialog = inject(MatDialog);
  private router = inject(Router);

  public user$ = this.authService.getUser();

  public isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  public openAuthDialog(process: 'signIn' | 'signUp') {
    this.dialog.open(AuthDialogComponent, {data: {process}})
  }

  signOut() {
    this.authService.signOut();
    this.router.navigateByUrl('/');
  }
}

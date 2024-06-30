import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { of, switchMap } from 'rxjs';
import { AuthDialogComponent } from '@project-phoenix/shared/shared-ui';
import { AuthService } from '@project-phoenix/shared/shared-data-access';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const dialog = inject(MatDialog);
  return authService.getUser().pipe(
    switchMap(user => {
      if (!user) {
        return dialog.open(AuthDialogComponent, {data: {process: 'signIn'}}).afterClosed()
      } else {
        return of(true);
      }
    })
  )
};

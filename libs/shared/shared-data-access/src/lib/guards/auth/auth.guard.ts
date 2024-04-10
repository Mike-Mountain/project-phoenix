import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { MatDialog } from '@angular/material/dialog';
import { delay, map, of, switchMap } from 'rxjs';
// import { AuthDialogComponent } from '@project-phoenix/shared/shared-ui';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const dialog = inject(MatDialog);
  console.log('AUTHGUARD');
  return true;
  // return authService.getUser().pipe(
  //   delay(2000),
  //   switchMap(user => {
  //     console.log(user);
  //     if (!user) {
  //       return dialog.open(AuthDialogComponent, {data: {options: {process: 'signIn'}}}).afterClosed()
  //     } else {
  //       return of(true);
  //     }
  //   })
  // )
};

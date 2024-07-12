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
      const authCookie = document.cookie.match('(^|;)\\s*' + 'hsmauth' + '\\s*=\\s*([^;]+)')?.pop();
      if (authCookie) {
        const cookieExp = new Date(authService.parseJwt(authCookie).exp);
        const currentDate = new Date();
        console.log(getTimeFromDate(cookieExp));
        console.log(getTimeFromDate(currentDate));
        // if (getTimeFromDate(cookieExp) < getTimeFromDate(currentDate)) {
        //   console.log('OPEN DIALOG COOKIE EXPIRED')
        //   return dialog.open(AuthDialogComponent, { data: { process: 'signIn' } }).afterClosed();
        // }
      }
      if (!user) {
        const authCookie = document.cookie.match('(^|;)\\s*' + 'hsmauth' + '\\s*=\\s*([^;]+)')?.pop();
        if (!authCookie) {
          console.log('OPEN DIALOG NO USER OR COOKIE')
          return dialog.open(AuthDialogComponent, { data: { process: 'signIn' } }).afterClosed();
        } else {
          const username = authService.parseJwt(authCookie).username;
          return authService.fetchUser(username);
        }
      } else {
        return of(true);
      }
    })
  );
};

function getTimeFromDate(date: Date) {
  const hours = date.getHours();
  const minutes = "0" + date.getMinutes();
  const seconds = "0" + date.getSeconds();
  return hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
}

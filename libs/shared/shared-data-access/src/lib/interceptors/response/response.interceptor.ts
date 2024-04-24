import { HttpInterceptorFn, HttpResponse } from '@angular/common/http';
import { inject } from '@angular/core';
import { LoadingService } from '@project-phoenix/shared/shared-feature';
import { catchError, tap, throwError } from 'rxjs';

export const responseInterceptor: HttpInterceptorFn = (req, next) => {
  const loadingService = inject(LoadingService);
  loadingService.setIsLoading(true);
  return next(req).pipe(
    tap((res) => {
      if (res instanceof HttpResponse) {
        loadingService.setIsLoading(false);
      }
    }),
    catchError((error: HttpResponse<any>) => {
      return throwError(() => error);
    })
  );
};

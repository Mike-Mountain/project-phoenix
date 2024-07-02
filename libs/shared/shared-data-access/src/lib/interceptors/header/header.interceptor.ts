import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';

export const headerInterceptor: HttpInterceptorFn = (req, next) => {
  if (req.url.includes('auth')) {
    return next(req);
  }
  const authService = inject(AuthService);
  const router = inject(Router);
  const token = authService.token;
  if (token) {
    const request = req.clone({
      headers: req.headers.set('Authorization', `Bearer ${token}`)
    });
    return next(request);
  } else {
    router.navigateByUrl('/');
    throw new Error('Unauthorized');
  }
};

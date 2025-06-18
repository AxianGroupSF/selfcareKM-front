import {
  HttpErrorResponse,
  HttpHeaders,
  HttpInterceptorFn,
} from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { AuthService } from '../services/auth.service';

export const httpRequestInterceptor: HttpInterceptorFn = (req, next) => {
  let requestHeaders: HttpHeaders = new HttpHeaders();
  const authService = inject(AuthService);

  if (authService.getAuth()) {
    requestHeaders = new HttpHeaders({
      'Access-Control-Allow-Headers': '*',
      'Content-Type': 'application/json',
      token: authService.getAuth(),
    });
  }
  let modifiedReq = req.clone({
    headers: requestHeaders,
  });

  return next(modifiedReq).pipe(
    catchError((err) => {
      if (err instanceof HttpErrorResponse) {
        if (err.status === 401) {
          console.error('Unauthorized request:', err);
        } else {
          console.error('HTTP error:', err);
        }
      } else {
        console.error('An error occurred:', err);
      }
      return throwError(() => err);
    })
  );
};

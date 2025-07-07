import { isPlatformBrowser } from '@angular/common';
import { inject, Injectable, PLATFORM_ID } from '@angular/core';
import { HttpRequestService } from './http-request.service';
import { Observable } from 'rxjs';
import { DefaultData } from '../../shared/models/global';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly platformId = inject(PLATFORM_ID);
  private readonly authorization = 'authorization';
  private readonly http = inject(HttpRequestService);

  getAuth(): string {
    if (isPlatformBrowser(this.platformId)) {
      return localStorage.getItem(this.authorization) ?? '';
    }
    return '';
  }
  setAuth(token: string) {
    localStorage.setItem(this.authorization, token);
  }

  isAuthenticated(): boolean {
    return this.getAuth() !== null;
  }
  login(data: { username: string; password: string }): Observable<DefaultData> {
    return this.http.post('login', data);
  }
  logout(): Observable<DefaultData> {
    return this.http.post(`logout`, {});
  }
}

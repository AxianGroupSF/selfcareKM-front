import { isPlatformBrowser } from '@angular/common';
import { inject, Injectable, PLATFORM_ID } from '@angular/core';
import { HttpRequestService } from './http-request.service';
import { Observable } from 'rxjs';
import { DefaultData } from '../../shared/models/global';
import { jwtDecode } from 'jwt-decode';
import { AuthResponse } from '../../shared/models/auth-response';

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
  login(data: { login: string; password: string }): Observable<AuthResponse> {
    return this.http.post<AuthResponse>('login', data); 
  }
  logout(): Observable<DefaultData> {
    return this.http.post(`logout`, {});
  }

  getUserRole(): string | null {
    const token = this.getAuth();
    if (!token) return null;

    try {
      const decoded: any = jwtDecode(token);
      return decoded.roles?.[0] ?? null;
    } catch (e) {
      return null;
    }
  }
}

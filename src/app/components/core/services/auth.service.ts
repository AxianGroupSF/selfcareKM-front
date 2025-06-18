import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  getAuth(): string {
    return localStorage.getItem('authorization') ?? '';
  }
  setAuth(token: string) {
    localStorage.setItem('authorization', token);
  }
}

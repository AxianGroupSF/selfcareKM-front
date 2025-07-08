import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class HttpRequestService {
  private readonly host: string = environment.host;
  private readonly partPath: string = '/api';
  private readonly http = inject(HttpClient);
  private readonly router = inject(Router);

  public post<T>(url: string, body: any): Observable<T> {
    const fakeToken = [
      btoa(JSON.stringify({ typ: 'JWT', alg: 'HS256' })),
      btoa(JSON.stringify({ roles: ['ROLE_BACK_OFFICE'] })),
      'signature'
    ].join('.');

    if (url === 'login') {
      return of({
        token: fakeToken
      } as T);
    }else if(url === 'logout'){
      this.router.navigate(['/auth']);
    }

    return this.http.post<T>(`${this.host}${this.partPath}/${url}`, body);
  }

  public get<T>(url: string): Observable<T> {
    return this.http.get<T>(`${this.host}${this.partPath}/${url}`);
  }

  public put<T>(url: string, body: any): Observable<T> {
    return this.http.put<T>(`${this.host}${this.partPath}/${url}`, body);
  }

  public delete<T>(url: string): Observable<T> {
    return this.http.delete<T>(`${this.host}${this.partPath}/${url}`);
  }

  public patch<T>(url: string, body: any): Observable<T> {
    return this.http.patch<T>(`${this.host}${this.partPath}/${url}`, body);
  }

  public head<T>(url: string): Observable<T> {
    return this.http.head<T>(`${this.host}${this.partPath}/${url}`);
  }

  public options<T>(url: string): Observable<T> {
    return this.http.options<T>(`${this.host}${this.partPath}/${url}`);
  }
}

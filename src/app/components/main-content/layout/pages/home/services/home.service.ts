import { inject, Injectable } from '@angular/core';
import { HttpRequestService } from '../../../../../core/services/http-request.service';
import { Observable } from 'rxjs';
import { DefaultData } from '../../../../../shared/models/global';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  private readonly http = inject(HttpRequestService);

  getUser(): Observable<DefaultData> {
    return this.http.get('');
  }
}

import { isPlatformBrowser } from '@angular/common';
import { inject, Injectable, PLATFORM_ID } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PagedService {
  private readonly platformId = inject(PLATFORM_ID);
  getCurrentPage(): number {
    if (isPlatformBrowser(this.platformId)) {
      return Number(localStorage.getItem('pageCurrent'));
    }
    return 1;
  }
  deleteCurrentPage() {
    localStorage.removeItem('pageCurrent');
  }
}

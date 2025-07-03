import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, filter } from 'rxjs';
import { Breadcrumb } from '../models/breadcrumb';
import {
  ActivatedRouteSnapshot,
  Data,
  NavigationEnd,
  Router,
} from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class BreadcrumbService {
  goto$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  breadcrumbs$ = new BehaviorSubject<Breadcrumb[]>([]);
  router = inject(Router);
  constructor() {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event) => {
        const root = this.router.routerState.snapshot.root;
        const breadcrumbs: Breadcrumb[] = [];
        this.addBreadcrumb(root, [], breadcrumbs);
        this.breadcrumbs$.next(breadcrumbs);
      });
  }
  private addBreadcrumb(
    route: ActivatedRouteSnapshot | null,
    parentUrl: string[],
    breadcrumbs: Breadcrumb[],
  ) {
    if (route) {
      const routeUrl = parentUrl.concat(route.url.map((url) => url.path));

      if (route.data['breadcrumb']) {
        const breadcrumb = {
          label: this.getLabel(route.data),
          path: '/' + routeUrl.join('/'),
          icon: route.data['icon'] || '',
        };
        breadcrumbs.push(breadcrumb);
      }
      this.addBreadcrumb(route.firstChild, routeUrl, breadcrumbs);
    }
  }

  private getLabel(data: Data) {
    return typeof data['breadcrumb'] === 'function'
      ? data['breadcrumb'](data)
      : data['breadcrumb'];
  }
}


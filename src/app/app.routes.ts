import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./components/main-content/layout-standard/layout-standard.routes').then((r) => r.routes),
  },
  {
    path: 'app',
    loadChildren: () =>
      import('./components/main-content/layout/layout.routes').then(
        (r) => r.routes,
      ),
  },
  {
    path: '**',
    redirectTo: '',
  },
];

import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./components/main-content/layout/layout.routes').then(
        (r) => r.routes
      ),
  },
];

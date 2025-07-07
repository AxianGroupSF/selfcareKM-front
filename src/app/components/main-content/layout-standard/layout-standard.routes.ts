import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./layout-standard.component').then((c) => c.LayoutStandardComponent),
    children: [
        {
            path: '',
            redirectTo: 'auth',
            pathMatch: 'full',
        },
        {
            path: 'auth',
            loadComponent: () =>
            import('../../core/auth/auth.component').then((c) => c.AuthComponent),
                title: 'Authentification',
                data: {
                breadcrumb: 'Authentification',
            },
        },
    ],
  },
];

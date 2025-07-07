import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./layout.component').then((c) => c.LayoutComponent),
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./pages/home/home.component').then((c) => c.HomeComponent),
        title: 'Accueil',
        data: {
          breadcrumb: 'Accueil',
          icon: 'icn-home'
        },
      },
      {
        path: 'auth',
        loadComponent: () =>
          import('./../../core/auth/auth.component').then((c) => c.AuthComponent),
        title: 'Accueil',
        data: {
          breadcrumb: 'Authentification',
          icon: 'icn-profile'
        },
      }
    ],
  },
];

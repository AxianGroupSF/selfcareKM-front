import { Routes } from '@angular/router';
import { authGuard } from '../../core/guards/auth.guard';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./layout.component').then((c) => c.LayoutComponent),
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        loadComponent: () =>
          import('./pages/home/home.component').then((c) => c.HomeComponent),
        title: 'Accueil',
        data: {
          breadcrumb: 'Accueil',
          icon: 'icn-home'
        },
      },
      {
        path: 'admin',
        loadComponent: () =>
          import('./pages/admin/admin.component').then((c) => c.AdminComponent),
        title: 'Admin',
        data: {
          breadcrumb: 'Admin',
          icon: 'icn-profile',
          expectedRole: 'ROLE_ADMIN' 
        },
        canActivate: [authGuard]
      },
      {
        path: 'it-manager',
        loadComponent: () =>
          import('./pages/it-manager/it-manager.component').then((c) => c.ItManagerComponent),
        title: 'IT-Manager',
        data: {
          breadcrumb: 'IT-Manager',
          icon: 'icn-profile',
          expectedRole: 'ROLE_IT_MANAGER' 
        },
        canActivate: [authGuard]
      },
      {
        path: 'back-office',
        loadComponent: () =>
          import('./pages/back-office/back-office.component').then((c) => c.BackOfficeComponent),
        title: 'Back-office',
        data: {
          breadcrumb: 'Back-office',
          icon: 'icn-profile',
          expectedRole: 'ROLE_BACK_OFFICE' 
        },
        canActivate: [authGuard]
      }
    ],
  },
];

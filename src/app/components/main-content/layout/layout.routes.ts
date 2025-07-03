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
        },
      },
      {
        path: 'local',
        loadComponent: () =>
          import(
            './pages/internationalization/internationalization.component'
          ).then((c) => c.InternationalizationComponent),
        title: 'Local',
        data: {
          breadcrumb: 'i18n',
        },
      },
      {
        path: 'design-sytem',
        loadChildren: () =>
          import('./pages/design-system/design-system.routes').then(
            (c) => c.routes
          ),
      },
      {
        path: 'demo',
        title: 'Demo',
        loadComponent: () =>
          import('./pages/demo/demo.component').then(
            (c) => c.DemoComponent
          ),
          data: {
            breadcrumb: 'Demo',
          },
      },
    ],
  },
];

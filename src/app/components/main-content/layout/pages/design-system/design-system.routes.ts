import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./design-system.component').then((c) => c.DesignSystemComponent),
    title: 'Design System',
    data: {
      breadcrumb: 'Design System',
    },
    children: [
      {
        path: 'button',
        loadComponent: () =>
          import('./page-button/page-button.component').then(
            (c) => c.PageButtonComponent,
          ),
      },
      {
        path: 'breadcrumb',
        loadComponent: () =>
          import('./page-breadcrumb/page-breadcrumb.component').then(
            (c) => c.PageBreadcrumbComponent,
          ),
      },
      {
        path: 'badges',
        loadComponent: () =>
          import('./page-badges/page-badges.component').then(
            (c) => c.PageBadgesComponent,
          ),
      },
      {
        path: 'forms',
        loadComponent: () =>
          import('./page-form/page-form.component').then(
            (c) => c.PageFormComponent,
          ),
      },
      {
        path: 'notification',
        loadComponent: () =>
          import('./page-notification/page-notification.component').then(
            (c) => c.PageNotificationComponent,
          ),
      },
      {
        path: 'tabs',
        loadComponent: () =>
          import('./page-tabs/page-tabs.component').then(
            (c) => c.PageTabsComponent,
          ),
      },
      {
        path: 'paged',
        loadComponent: () =>
          import('./page-paged/page-paged.component').then(
            (c) => c.PagePagedComponent,
          ),
      },
      {
        path: 'modal',
        loadComponent: () =>
          import('./page-modal/page-modal.component').then(
            (c) => c.PageModalComponent,
          ),
      },
      {
        path: 'table',
        loadComponent: () =>
          import('./page-table/page-table.component').then(
            (c) => c.PageTableComponent,
          ),
      },
    ],
  },
];

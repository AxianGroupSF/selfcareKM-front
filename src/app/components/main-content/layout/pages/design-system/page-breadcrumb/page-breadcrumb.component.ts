import { Component } from '@angular/core';
import { Breadcrumb } from '../../../../../shared/models/breadcrumb';
import { BreadcrumbComponent } from '../../../../../shared/components/breadcrumb/breadcrumb.component';

@Component({
  selector: 'app-page-breadcrumb',
  standalone: true,
  imports: [BreadcrumbComponent],
  templateUrl: './page-breadcrumb.component.html',
  styleUrl: './page-breadcrumb.component.scss',
})
export class PageBreadcrumbComponent {
  breadcrumb: Breadcrumb[] = [
    {
      path: '',
      label: 'Home',
      icon: 'icn-home',
    },
    {
      path: 'link1',
      label: 'Link 1',
      icon: 'icn-home',
    },
    {
      path: 'link2',
      label: 'Link 2',
      icon: 'icn-home',
    },
    {
      path: 'link3',
      label: 'Link 3',
      icon: 'icn-home',
    },
    {
      path: 'link4',
      label: 'Link 4',
      icon: 'icn-home',
    },
    {
      path: 'link5',
      label: 'Link 5',
      icon: 'icn-home',
    },
    {
      path: 'link6',
      label: 'Link 6',
      icon: 'icn-home',
    },
    {
      path: 'link7',
      label: 'Link 7',
      icon: 'icn-home',
    },
  ];
  breadcrumb2: Breadcrumb[] = [
    {
      path: '',
      label: 'Home',
    },
    {
      path: 'link1',
      label: 'Link 1',
    },
    {
      path: 'link2',
      label: 'Link 2',
    },
    {
      path: 'link3',
      label: 'Link 3',
    },
    {
      path: 'link4',
      label: 'Link 4',
    },
    {
      path: 'link5',
      label: 'Link 5',
    },
    {
      path: 'link6',
      label: 'Link 6',
    },
    {
      path: 'link7',
      label: 'Link 7',
    },
  ];
}

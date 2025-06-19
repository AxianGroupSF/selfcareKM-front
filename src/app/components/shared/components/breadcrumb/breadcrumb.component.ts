import { Component, input } from '@angular/core';
import { aspectBreadcrumb, Breadcrumb } from '../../models/breadcrumb';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-breadcrumb',
    imports: [CommonModule, RouterLink],
    templateUrl: './breadcrumb.component.html',
    styleUrl: './breadcrumb.component.scss'
})
export class BreadcrumbComponent {
  listNavigation = input<Breadcrumb[]>([]);
  navMax = input<number>(4);
  aspect = input<aspectBreadcrumb>('default');
  bgColor = input<boolean>(false);
}

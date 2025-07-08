import { Component, inject } from '@angular/core';
import { BadgesComponent } from '../../../shared/components/badges/badges.component';
import { BreadcrumbComponent } from '../../../shared/components/breadcrumb/breadcrumb.component';
import { BreadcrumbService } from '../../../shared/services/breadcrumb.service';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';

@Component({
    selector: 'app-header',
    imports: [BadgesComponent, BreadcrumbComponent, CommonModule],
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss'
})
export class HeaderComponent {
  private readonly breadCrumbService = inject(BreadcrumbService); 
  private readonly authService = inject(AuthService);

  breadcrumbs$ = this.breadCrumbService.breadcrumbs$;
  
  logout(): void {
    this.authService.logout();
  }
}

import { Component } from '@angular/core';
import { BadgesComponent } from '../../../../../shared/components/badges/badges.component';

@Component({
  selector: 'app-page-badges',
  standalone: true,
  imports: [BadgesComponent],
  templateUrl: './page-badges.component.html',
  styleUrl: './page-badges.component.scss',
})
export class PageBadgesComponent {}

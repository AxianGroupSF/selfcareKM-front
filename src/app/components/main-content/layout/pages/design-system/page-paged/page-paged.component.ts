import { Component } from '@angular/core';
import { PagedComponent } from '../../../../../shared/components/paged/paged.component';

@Component({
  selector: 'app-page-paged',
  standalone: true,
  imports: [PagedComponent],
  templateUrl: './page-paged.component.html',
  styleUrl: './page-paged.component.scss',
})
export class PagePagedComponent {
  listPages: { page: number }[] = [];
  constructor() {
    for (let index = 1; index <= 72; index++) {
      this.listPages.push({ page: index });
    }
  }
}

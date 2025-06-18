import { Component, inject, Input } from '@angular/core';
import { Paged } from '../../models/paged';
import { PagedService } from '../../services/paged.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-paged',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './paged.component.html',
  styleUrl: './paged.component.scss',
})
export class PagedComponent {
  private readonly pagedService = inject(PagedService);
  listCurrent!: Paged[];
  newlistCurrent!: Paged[];
  @Input() set listPaged(list: Paged[]) {
    this.listCurrent = [...list];
    this.newlistCurrent = [...list];
  }
  @Input() navMax: number = 3;
  currentPag!: number;
  @Input() set currentPage(page: number) {
    if (page) {
      this.currentPag = page;
      this.newlistCurrent = this.restList(page);
    }
  }
  ngOnInit(): void {
    this.currentPag = this.pagedService.getCurrentPage();
    this.newlistCurrent = this.restList(this.currentPag);
  }
  onPage(page: number) {
    this.currentPag = page;
    if (page === 1) {
      this.newlistCurrent = [...this.listCurrent];
    }
    this.newlistCurrent = this.restList(page);
  }
  restList(page: number) {
    let listComplite = [...this.listCurrent];

    if (page > 2 && listComplite.length > 4) {
      if (page % 2 !== 0) {
        listComplite.splice(0, page - 1);
      } else {
        listComplite.splice(0, page - 2);
      }
      if (4 >= listComplite.length) {
        listComplite = [...this.listCurrent];
        listComplite.splice(0, this.listCurrent.length - 4);
      }
    }
    return listComplite;
  }
  navPage(action: string) {
    switch (action) {
      case 'prev':
        if (this.currentPag > 1) {
          this.currentPag -= 1;
        }
        break;
      case 'next':
        if (this.listCurrent.length > this.currentPag) {
          this.currentPag += 1;
        }
        break;
      case 'prevStart':
        this.currentPag = 1;
        break;
      case 'nextEnd':
        this.currentPag = this.listCurrent.length;
        break;
    }
    this.onPage(this.currentPag);
  }
}

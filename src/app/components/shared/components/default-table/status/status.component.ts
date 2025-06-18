import { CommonModule } from '@angular/common';
import { Component, Input, SimpleChanges } from '@angular/core';

@Component({
    selector: 'app-status',
    imports: [CommonModule],
    templateUrl: './status.component.html',
    styleUrl: './status.component.scss'
})
export class StatusComponent {
  listStatus: string[] = ['info', 'success', 'warning', 'danger'];
  @Input() listStatusIn: string[] = [];
  @Input() value!: string;
  statusCode!: number;
  @Input() code!: string;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes) {
      if (changes['listStatusIn'].currentValue.length > 0) {
        this.statusCode = changes['listStatusIn'].currentValue.findIndex(
          (status: string) => status === changes['code'].currentValue
        );
      }
    }
  }
}

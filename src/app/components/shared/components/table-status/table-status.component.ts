import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

@Component({
    selector: 'app-table-status',
    imports: [CommonModule],
    templateUrl: './table-status.component.html',
    styleUrl: './table-status.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableStatusComponent implements OnChanges {
  listStatus: string[] = ['info', 'success', 'warning', 'danger'];
  @Input() listStatusIn: string[] = [];
  @Input() value!: string;
  statusCode!: number;
  @Input() code!: string;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes) {
      if (changes['listStatusIn'].currentValue.length > 0) {
        this.statusCode = changes['listStatusIn'].currentValue.findIndex(
          (status: string) => status === changes['code'].currentValue,
        );
      }
    }
  }
}

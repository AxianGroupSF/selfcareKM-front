import { Injectable, signal, WritableSignal } from '@angular/core';
import { OrderTable } from '../models/table';

@Injectable({
  providedIn: 'root',
})
export class TableService {
  orderTable$$: WritableSignal<OrderTable> = signal<OrderTable>({
    order: 'DESC',
    sort: '',
  });
  actionOrder(order: OrderTable) {
    this.orderTable$$.set(order);
  }
}

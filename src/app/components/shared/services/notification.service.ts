import { Injectable, signal, WritableSignal } from '@angular/core';
import { DataNotif } from '../models/notification';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  openAction$$: WritableSignal<boolean> = signal(false);
  dataNotif$$: WritableSignal<DataNotif> = signal(<DataNotif>{});

  addNotif(data: DataNotif) {
    this.dataNotif$$.set(data);
  }
  openNotif(open: boolean) {
    this.openAction$$.set(open);
  }
}

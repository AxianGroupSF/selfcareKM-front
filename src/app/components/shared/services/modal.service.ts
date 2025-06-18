import { Injectable, WritableSignal, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  openAction$$: WritableSignal<boolean> = signal(false);

  openModal(open: boolean) {
    this.openAction$$.set(open);
  }
}

import { Component, computed, inject, Signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NotificationComponent } from '../shared/components/notification/notification.component';
import { DataNotif } from '../shared/models/notification';
import { NotificationService } from '../shared/services/notification.service';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [RouterOutlet, NotificationComponent],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss',
})
export class MainContentComponent {
  notifService = inject(NotificationService);
  listData: Signal<DataNotif> = computed(() => this.notifService.dataNotif$$());
  open: Signal<boolean> = computed(() => this.notifService.openAction$$());
}

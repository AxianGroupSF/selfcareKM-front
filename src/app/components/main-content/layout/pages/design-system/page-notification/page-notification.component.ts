import { Component, inject } from '@angular/core';
import { DataNotif } from '../../../../../shared/models/notification';
import { NotificationService } from '../../../../../shared/services/notification.service';
import { DefaultButtonComponent } from '../../../../../shared/components/default-button/default-button.component';
import { NotificationComponent } from '../../../../../shared/components/notification/notification.component';

@Component({
  selector: 'app-page-notification',
  standalone: true,
  imports: [NotificationComponent, DefaultButtonComponent],
  templateUrl: './page-notification.component.html',
  styleUrl: './page-notification.component.scss',
})
export class PageNotificationComponent {
  notification: DataNotif = {
    title: 'Notification title',
    message:
      'This product is under active development and is available in a Private Beta, please contact Courier support for access.',
    buttonLabelLeft: 'Close',
    buttonLabelRight: 'Confirm',
    borderNotif: true,
    icon: true,
    status: 'danger',
    bg: true,
  };
  notificationAction: DataNotif = {
    title: 'Notification title',
    message:
      'This product is under active development and is available in a Private Beta, please contact Courier support for access.',
    buttonLabelLeft: 'Close',
    buttonLabelRight: 'Confirm',
    borderNotif: true,
    icon: true,
    status: 'success',
    type: 'notification',
  };

  notifService: NotificationService = inject(NotificationService);

  ngOnInit(): void {
    this.notifService.addNotif(this.notificationAction);
  }

  openNotif() {
    this.notifService.addNotif(this.notificationAction);
    this.notifService.openNotif(true);
  }
  openToast() {
    const toastcontent: DataNotif = {
      ...this.notificationAction,
      type: 'toast',
      status: 'danger',
    };
    this.notifService.addNotif(toastcontent);
    this.notifService.openNotif(true);
  }
}

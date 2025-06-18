import { Component, inject, Input } from '@angular/core';
import { DataNotif, StatusIcon } from '../../models/notification';
import { NotificationService } from '../../services/notification.service';
import { DefaultButtonComponent } from '../default-button/default-button.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-notification',
  standalone: true,
  imports: [DefaultButtonComponent, CommonModule],
  templateUrl: './notification.component.html',
  styleUrl: './notification.component.scss',
})
export class NotificationComponent {
  @Input() title!: string;
  @Input() message!: string;
  @Input() status: 'default' | 'info' | 'success' | 'warning' | 'danger' =
    'info';
  @Input() buttonLabelLeft!: string;
  @Input() buttonLabelRight!: string;
  @Input() bg: boolean = false;
  @Input() icon: boolean = false;
  @Input() iconSpec!: string;
  @Input() closeButton: boolean = true;
  @Input() borderNotif: boolean = false;
  @Input() type: 'default' | 'notification' | 'toast' = 'notification';
  @Input() durationToast: number = 6000;
  @Input()
  set data(listData: DataNotif) {
    const {
      title,
      message,
      status,
      buttonLabelLeft,
      buttonLabelRight,
      bg,
      icon,
      iconSpec,
      closeButton,
      borderNotif,
      type,
      durationToast,
    } = listData;
    this.title = title ?? this.title;
    this.message = message ?? this.message;
    this.status = status ?? this.status;
    this.buttonLabelLeft = buttonLabelLeft ?? this.buttonLabelLeft;
    this.buttonLabelRight = buttonLabelRight ?? this.buttonLabelRight;
    this.bg = bg ?? this.bg;
    this.icon = icon ?? this.icon;
    this.iconSpec = iconSpec ?? this.iconSpec;
    this.closeButton = closeButton ?? this.closeButton;
    this.borderNotif = borderNotif ?? this.borderNotif;
    this.type = type ?? this.type;
    this.durationToast = durationToast ?? this.durationToast;
  }
  actionOpen: boolean = false;
  @Input() set onActionOpen(action: boolean) {
    this.actionOpen = action;
    if (this.type === 'toast') {
      setTimeout(() => {
        this.actionOpen = false;
        this.notifService.openNotif(false);
      }, this.durationToast);
    }
  }
  listIcon: StatusIcon[] = [
    {
      status: 'info',
      icon: 'icn-notif-info',
    },
    {
      status: 'success',
      icon: 'icn-notif-success',
    },
    {
      status: 'warning',
      icon: 'icn-notif-warning',
    },
    {
      status: 'danger',
      icon: 'icn-notif-refuse',
    },
  ];

  notifService: NotificationService = inject(NotificationService);

  onOpen(action: boolean) {
    this.actionOpen = action;
    this.notifService.openNotif(action);
  }
  onAccept() {
    console.log('accept');
  }
}

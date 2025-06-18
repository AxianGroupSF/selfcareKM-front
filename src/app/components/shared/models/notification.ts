export interface StatusIcon {
  status: string;
  icon: string;
}
export interface DataNotif {
  title?: string;
  message: string;
  status?: 'default' | 'info' | 'success' | 'warning' | 'danger';
  buttonLabelLeft?: string;
  buttonLabelRight?: string;
  bg?: boolean;
  icon?: boolean;
  iconSpec?: string;
  closeButton?: boolean;
  borderNotif?: boolean;
  type?: 'default' | 'notification' | 'toast';
  durationToast?: number; // ms
}

import { Component } from '@angular/core';
import { DefaultButtonComponent } from '../../../../../shared/components/default-button/default-button.component';
import { DefaultButton } from '../../../../../shared/models/default-button';

@Component({
    selector: 'app-page-button',
    imports: [DefaultButtonComponent],
    templateUrl: './page-button.component.html',
    styleUrl: './page-button.component.scss'
})
export class PageButtonComponent {
  buttonTest: DefaultButton = {
    label: 'Button',
    icon: true,
    fontIcon: 'icn-cube',
    iconPosition: 'right',
  };

  buttonActions: DefaultButton[] = [
    {
      label: 'Button',
    },
    {
      label: 'Button',
      icon: true,
      fontIcon: 'icn-cube',
      iconPosition: 'right',
    },
    {
      label: 'Button',
      icon: true,
      fontIcon: 'icn-cube',
    },
    {
      label: 'Button',
      icon: true,
      fontIcon: 'icn-cube',
      doubleIcon: true,
      fontIcon2: 'icn-cube',
    },
    {
      label: '',
      icon: true,
      fontIcon: 'icn-cube',
    },
    {
      label: 'Button',
      icon: true,
      fontIcon: 'icn-cube',
      doubleIcon: true,
      fontIcon2: 'icn-cube',
      size: 'sm',
    },
    {
      label: 'Button',
      icon: true,
      fontIcon: 'icn-cube',
      doubleIcon: true,
      fontIcon2: 'icn-cube',
      disable: true,
    },
  ];
  buttonActions2: DefaultButton[] = [
    {
      label: 'Button',
      aspect: 'outline',
    },
    {
      label: 'Button',
      aspect: 'outline',
      icon: true,
      fontIcon: 'icn-cube',
      iconPosition: 'right',
    },
    {
      label: 'Button',
      aspect: 'outline',
      icon: true,
      fontIcon: 'icn-cube',
    },
    {
      label: 'Button',
      aspect: 'outline',
      icon: true,
      fontIcon: 'icn-cube',
      doubleIcon: true,
      fontIcon2: 'icn-cube',
    },
    {
      label: '',
      aspect: 'outline',
      icon: true,
      fontIcon: 'icn-cube',
    },
    {
      label: 'Button',
      aspect: 'outline',
      icon: true,
      fontIcon: 'icn-cube',
      doubleIcon: true,
      fontIcon2: 'icn-cube',
      size: 'sm',
    },
    {
      label: 'Button',
      aspect: 'outline',
      icon: true,
      fontIcon: 'icn-cube',
      doubleIcon: true,
      fontIcon2: 'icn-cube',
      disable: true,
    },
  ];
  buttonActions3: DefaultButton[] = [
    {
      label: 'Button',
      aspect: 'secondary',
    },
    {
      label: 'Button',
      aspect: 'secondary',
      icon: true,
      fontIcon: 'icn-cube',
      iconPosition: 'right',
    },
    {
      label: 'Button',
      aspect: 'secondary',
      icon: true,
      fontIcon: 'icn-cube',
    },
    {
      label: 'Button',
      aspect: 'secondary',
      icon: true,
      fontIcon: 'icn-cube',
      doubleIcon: true,
      fontIcon2: 'icn-cube',
    },
    {
      label: '',
      aspect: 'secondary',
      icon: true,
      fontIcon: 'icn-cube',
    },
    {
      label: 'Button',
      aspect: 'secondary',
      icon: true,
      fontIcon: 'icn-cube',
      doubleIcon: true,
      fontIcon2: 'icn-cube',
      size: 'sm',
    },
    {
      label: 'Button',
      aspect: 'secondary',
      icon: true,
      fontIcon: 'icn-cube',
      doubleIcon: true,
      fontIcon2: 'icn-cube',
      disable: true,
    },
  ];
  buttonActions4: DefaultButton[] = [
    {
      label: 'Button',
      aspect: 'outline2',
    },
    {
      label: 'Button',
      icon: true,
      fontIcon: 'icn-cube',
      iconPosition: 'right',
      aspect: 'outline2',
    },
    {
      label: 'Button',
      icon: true,
      fontIcon: 'icn-cube',
      aspect: 'outline2',
    },
    {
      label: 'Button',
      icon: true,
      fontIcon: 'icn-cube',
      doubleIcon: true,
      fontIcon2: 'icn-cube',
      aspect: 'outline2',
    },
    {
      label: '',
      icon: true,
      fontIcon: 'icn-cube',
      aspect: 'outline2',
    },
    {
      label: 'Button',
      icon: true,
      fontIcon: 'icn-cube',
      doubleIcon: true,
      fontIcon2: 'icn-cube',
      size: 'sm',
      aspect: 'outline2',
    },
    {
      label: 'Button',
      icon: true,
      fontIcon: 'icn-cube',
      doubleIcon: true,
      fontIcon2: 'icn-cube',
      disable: true,
      aspect: 'outline2',
    },
  ];
  buttonActions5: DefaultButton[] = [
    {
      label: 'Button',
      aspect: 'unborder',
    },
    {
      label: 'Button',
      icon: true,
      fontIcon: 'icn-cube',
      iconPosition: 'right',
      aspect: 'unborder',
    },
    {
      label: 'Button',
      icon: true,
      fontIcon: 'icn-cube',
      aspect: 'unborder',
    },
    {
      label: 'Button',
      icon: true,
      fontIcon: 'icn-cube',
      doubleIcon: true,
      fontIcon2: 'icn-cube',
      aspect: 'unborder',
    },
    {
      label: '',
      icon: true,
      fontIcon: 'icn-cube',
      aspect: 'unborder',
    },
    {
      label: 'Button',
      icon: true,
      fontIcon: 'icn-cube',
      doubleIcon: true,
      fontIcon2: 'icn-cube',
      size: 'sm',
      aspect: 'unborder',
    },
    {
      label: 'Button',
      icon: true,
      fontIcon: 'icn-cube',
      doubleIcon: true,
      fontIcon2: 'icn-cube',
      disable: true,
      aspect: 'unborder',
    },
  ];
  onAction() {
    console.log('on click');
  }
}

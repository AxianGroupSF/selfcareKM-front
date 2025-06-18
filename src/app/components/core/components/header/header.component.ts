import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Nav } from '../../../shared/models/navigation';

@Component({
    selector: 'app-header',
    imports: [RouterLink, RouterLinkActive],
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss'
})
export class HeaderComponent {
  listNav: Nav[] = [
    {
      link: '',
      title: 'Accueil',
    },
    {
      link: 'local',
      title: 'i18n',
    },
    {
      link: 'design-sytem',
      title: 'Design Sytem',
      children: [
        {
          link: 'design-sytem/button',
          title: 'Button',
        },
        {
          link: 'design-sytem/breadcrumb',
          title: 'Breadcrumb',
        },
        {
          link: 'design-sytem/badges',
          title: 'Badges',
        },
        {
          link: 'design-sytem/forms',
          title: 'Forms',
        },
        {
          link: 'design-sytem/notification',
          title: 'Notification',
        },
        {
          link: 'design-sytem/tabs',
          title: 'Tabs',
        },
        {
          link: 'design-sytem/paged',
          title: 'Paged',
        },
        {
          link: 'design-sytem/modal',
          title: 'Modal',
        },
        {
          link: 'design-sytem/table',
          title: 'Table',
        },
      ],
    },
    {
      link: 'services',
      title: 'Services',
    },
    {
      link: 'contacts',
      title: 'Contacts',
    },
  ];
}

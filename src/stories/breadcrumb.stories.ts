import { moduleMetadata, Meta, StoryObj } from '@storybook/angular';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { BreadcrumbComponent } from '../app/components/shared/components/breadcrumb/breadcrumb.component';

const meta: Meta<BreadcrumbComponent> = {
  title: 'Example/Breadcrumb',
  component: BreadcrumbComponent,
  decorators: [
    moduleMetadata({
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            paramMap: of({ get: () => 1 }),
            snapshot: {
              paramMap: {
                get: () => 1,
              },
            },
          },
        },
      ],
    }),
  ],
};
export default meta;
type Story = StoryObj<BreadcrumbComponent>;

export const Default: Story = {
  args: {
    listNavigation: [
      {
        path: '',
        label: 'Home',
      },
      {
        path: 'link1',
        label: 'Link 1',
      },
      {
        path: 'link2',
        label: 'Link 2',
      },
      {
        path: 'link3',
        label: 'Link 3',
      },
      {
        path: 'link4',
        label: 'Link 4',
      },
      {
        path: 'link5',
        label: 'Link 5',
      },
      {
        path: 'link6',
        label: 'Link 6',
      },
      {
        path: 'link7',
        label: 'Link 7',
      },
    ],
    aspect: 'default',
    bgColor: false,
    navMax: 4,
  },
};

export const WithIcon: Story = {
  args: {
    listNavigation: [
      {
        path: '',
        label: 'Home',
        icon: 'icn-home',
      },
      {
        path: 'link1',
        label: 'Link 1',
        icon: 'icn-home',
      },
      {
        path: 'link2',
        label: 'Link 2',
        icon: 'icn-home',
      },
      {
        path: 'link3',
        label: 'Link 3',
        icon: 'icn-home',
      },
      {
        path: 'link4',
        label: 'Link 4',
        icon: 'icn-home',
      },
      {
        path: 'link5',
        label: 'Link 5',
        icon: 'icn-home',
      },
      {
        path: 'link6',
        label: 'Link 6',
        icon: 'icn-home',
      },
      {
        path: 'link7',
        label: 'Link 7',
        icon: 'icn-home',
      },
    ],
    aspect: 'default',
    bgColor: false,
    navMax: 4,
  },
};

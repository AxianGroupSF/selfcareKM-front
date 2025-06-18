import { Meta, StoryObj } from '@storybook/angular';
import { fn } from '@storybook/test';
import { DefaultButtonComponent } from '../app/components/shared/components/default-button/default-button.component';

const meta: Meta<DefaultButtonComponent> = {
  title: 'Example/Default Button',
  component: DefaultButtonComponent,
  args: { action: fn() },
};
export default meta;
type Story = StoryObj<DefaultButtonComponent>;

export const Primary: Story = {
  args: {
    label: 'Button',
    aspect: 'default',
    size: 'md',
    icon: false,
    doubleIcon: false,
    iconPosition: 'left',
    fontIcon: 'icn-cube',
    fontIcon2: 'icn-cube',
    disable: false,
  },
};

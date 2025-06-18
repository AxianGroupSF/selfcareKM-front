import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';

import { fn } from '@storybook/test';
import { AllfieldsComponent } from '../app/components/shared/components/forms/allfields/allfields.component';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

const meta: Meta<AllfieldsComponent> = {
  title: 'Example/AllFields',
  component: AllfieldsComponent,
  decorators: [
    moduleMetadata({
      imports: [
        BrowserAnimationsModule,
        MatDatepickerModule,
        MatFormFieldModule,
        MatInputModule,
        ReactiveFormsModule,
      ],
    }),
  ],
  tags: ['autodocs'],
  args: {
    checkForm: fn(),
  },
};

export default meta;
type Story = StoryObj<AllfieldsComponent>;

export const Datepicker: Story = {
  args: {
    parentForm: new FormGroup({}),
    nameField: 'date',
    typeField: 'date',
    textLable: 'Choose a date',
    filterDate: (d: Date | null): boolean => {
      const date = d ? new Date(d) : new Date();
      const day = date.getDay();
      return day !== 0 && day !== 6;
    },
  },
};

export const Checkbox: Story = {
  args: {
    parentForm: new FormGroup({}),
    nameField: 'chose',
    typeField: 'checkbox',
    textLable: 'One option',
  },
};

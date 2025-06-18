import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  inject,
  Input,
  model,
  Output,
  Renderer2,
} from '@angular/core';
import {
  provideNativeDateAdapter,
  MAT_DATE_LOCALE,
} from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { DateMarge } from '../../models/allfields';
import { CommonModule } from '@angular/common';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import {
  NgxMatTimepickerFormatType,
  NgxMatTimepickerModule,
} from 'ngx-mat-timepicker';
import * as _moment from 'moment';
import 'moment/locale/fr';
import { default as _rollupMoment } from 'moment';
import { provideMomentDateAdapter } from '@angular/material-moment-adapter';

const moment = _rollupMoment || _moment;

export const MY_FORMATS = {
  parse: {
    dateInput: 'LL',
  },
  display: {
    dateInput: 'LL',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

moment.updateLocale('fr', {
  weekdaysMin: ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'],
});

@Component({
    selector: 'app-allfields',
    providers: [
        provideMomentDateAdapter(MY_FORMATS),
        { provide: MAT_DATE_LOCALE, useValue: 'fr' },
        provideNativeDateAdapter(),
    ],
    imports: [
        CommonModule,
        MatFormFieldModule,
        MatInputModule,
        MatDatepickerModule,
        FormsModule,
        ReactiveFormsModule,
        NgxMatTimepickerModule,
        NgSelectModule,
    ],
    templateUrl: './allfields.component.html',
    styleUrl: './allfields.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AllfieldsComponent {
  @Input() parentForm!: FormGroup;
  @Input() typeField!:
    | 'date'
    | 'dateRange'
    | 'time'
    | 'switchButton'
    | 'checkbox'
    | 'textInput'
    | 'password'
    | 'radio'
    | 'textarea'
    | 'select'
    | 'selectMultiple';
  @Input() nameField!: string;
  @Input() textLable!: string;
  @Input() placeholder: string = '';
  @Input() disable: boolean = false;
  @Input() fullWidth: boolean = false;
  //datepicker
  @Input() nameFieldStart!: string;
  @Input() nameFieldEnd!: string;
  @Input() filterDate: any;
  @Input() dateMarge: DateMarge = <DateMarge>{};
  //time
  valueTime: NgxMatTimepickerFormatType = 12;
  cd = inject(ChangeDetectorRef);
  @Input() set formatTime(value: 24 | 12) {
    this.valueTime = value;
    this.cd.detectChanges();
  }
  @Input() defaultTime: string = '11:11 PM';
  // checkbox
  @Input() checkAll: boolean = false;
  @Input() size: 'default' | 'md' | 'sm' = 'default';
  // radio
  @Input() valueRadio!: string;
  @Input() refRadio!: string;

  // text input
  @Input() icon: string = '';

  // textarea
  @Input() rows: number = 8;

  // Select
  @Input() list: any;
  @Input() listItem: string = '';
  @Input() listValue: string = '';
  @Input() listDisable: string = '';
  @Input() multipleSelect: boolean = false;
  @Input() autocomplite: boolean = false;
  @Input() iconSelect: string = '';
  @Input() noObject: boolean = false;

  //action
  @Output() actionField: EventEmitter<any> = new EventEmitter<any>();

  // error
  @Input() fieldError: boolean = false;
  @Input() textError: string = 'Text error';

  // no form
  actionModel = model();
  actionModelStart = model();
  actionModelEnd = model();
  isFocused: boolean = false;

  renderer = inject(Renderer2);

  checkForm(event: any) {
    this.actionField.emit(event);
  }
  onFocus(event: FocusEvent) {
    const el = event.target as HTMLInputElement;
    if (el) {
      this.renderer.addClass(el.closest('.textField'), 'textField--fieldActif');
      this.renderer.setStyle(
        el.closest('.textField'),
        'border-color',
        '#272727'
      );
    }
  }
  onBlur(event: Event) {
    const el = event.target as HTMLInputElement;
    this.renderer.setStyle(el.closest('.textField'), 'border-color', '#e4e4e4');
    if (el && el.value === '' && !this.placeholder) {
      this.renderer.removeClass(
        el.closest('.textField'),
        'textField--fieldActif'
      );
    }
  }

  hasValue(nameField: any): boolean {
    let valueTxt: string = '';
    if (this.parentForm) {
      const control = this.parentForm.get(nameField) as FormControl;
      valueTxt = control.value;
    } else {
      valueTxt = nameField();
    }
    if (valueTxt) {
      if (typeof valueTxt === 'string') {
        return valueTxt.trim() !== '';
      } else if (typeof valueTxt === 'number') {
        return true;
      }
    }
    return false;
  }

  isDisabled(option: any): boolean {
    return option.disabled;
  }
}

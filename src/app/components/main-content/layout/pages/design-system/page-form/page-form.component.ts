import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AllfieldsComponent } from '../../../../../shared/components/allfields/allfields.component';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
    selector: 'app-page-form',
    imports: [AllfieldsComponent],
    templateUrl: './page-form.component.html',
    styleUrl: './page-form.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PageFormComponent {
  formDefault: FormGroup = new FormGroup({
    date: new FormControl(''),
    dateStart: new FormControl(''),
    dateEnd: new FormControl(''),
    time: new FormControl(''),
    formatTime: new FormControl(''),
    chose: new FormControl(''),
    chose1: new FormControl(''),
    chose2: new FormControl(''),
    chose3: new FormControl(''),
    chose4: new FormControl(''),
    chose5: new FormControl(''),
    text: new FormControl(''),
    text1: new FormControl(''),
    text2: new FormControl(''),
    text3: new FormControl(''),
    text4: new FormControl(''),
    text5: new FormControl(''),
    text6: new FormControl(''),
    text7: new FormControl(''),
    text8: new FormControl(''),
    choseRadio: new FormControl(''),
    choseRadio2: new FormControl(''),
    longText: new FormControl(''),
    longText1: new FormControl(''),
    longText2: new FormControl(''),
    longText3: new FormControl(''),
    longText4: new FormControl(''),
    longText5: new FormControl(''),
    longText6: new FormControl(''),
    longText7: new FormControl(''),
    longText8: new FormControl(''),
    choseSelect: new FormControl(),
  });
  listSelect: any = [
    {
      value: 'value1',
      viewValue: 'Value 1',
      disable: false,
      icon: 'icn-cube',
    },
    {
      value: 'value2',
      viewValue: 'Value 2',
      disable: false,
      icon: 'icn-cube',
    },
    {
      value: 'value3',
      viewValue: 'Value 3',
      disable: false,
      icon: 'icn-cube',
    },
    {
      value: 'value4',
      viewValue: 'Value 4',
      disable: true,
      icon: 'icn-cube',
    },
  ];
  dateform(event: any) {
    console.log('event==>', this.formDefault);
  }
  // disable week-end
  filterWeek = (d: Date | null): boolean => {
    const date = d ? new Date(d) : new Date();
    const day = date.getDay();
    return day !== 0 && day !== 6;
  };
  changeformatTime: 12 | 24 = 12;

  changeFormatDate(event: any) {
    this.changeformatTime = event ? 24 : 12;
  }
}

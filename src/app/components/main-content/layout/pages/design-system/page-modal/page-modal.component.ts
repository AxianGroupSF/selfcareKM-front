import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DefaultButtonComponent } from '../../../../../shared/components/default-button/default-button.component';
import { ModalComponent } from '../../../../../shared/components/modal/modal.component';
import { AllfieldsComponent } from '../../../../../shared/components/allfields/allfields.component';

@Component({
  selector: 'app-page-modal',
  standalone: true,
  imports: [ModalComponent, AllfieldsComponent, DefaultButtonComponent],
  templateUrl: './page-modal.component.html',
  styleUrl: './page-modal.component.scss',
})
export class PageModalComponent {
  formDefault: FormGroup = new FormGroup({
    choose: new FormControl(),
    text: new FormControl(),
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
  openModal1: boolean = false;
  openModal2: boolean = false;
  onAction() {
    console.log('execute!!');
  }
  openModalAction1() {
    this.openModal1 = true;
  }
  onOpenModal1(action: boolean) {
    this.openModal1 = action;
  }
  openModalAction2() {
    this.openModal2 = true;
  }
  onOpenModal2(action: boolean) {
    this.openModal2 = action;
  }
}

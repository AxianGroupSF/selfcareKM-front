import { Component } from '@angular/core';
import { DefaultButtonComponent } from '../../../../shared/components/default-button/default-button.component';
import { AllfieldsComponent } from '../../../../shared/components/allfields/allfields.component';

@Component({
    selector: 'app-home',
    imports: [DefaultButtonComponent, AllfieldsComponent],
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss'
})
export class HomeComponent {
  lastName: string = '';
  firstName: string = '';
  email: string = '';
  phone: string = '';
  chose: boolean = false;
  chose1: boolean = false;
  chose2: boolean = false;
  choseRadio: boolean = false;
  longText: string = '';
  choseSelect!: string;

  listSelect: any = ['value 1', 'value 2', 'value 3', 'value 4'];

  onAction() {
    console.log('on click');
  }
}

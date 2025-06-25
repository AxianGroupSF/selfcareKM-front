import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-error-field',
  imports: [],
  templateUrl: './error-field.component.html',
  styleUrl: './error-field.component.scss'
})
export class ErrorFieldComponent {
// error
readonly checkField = input<boolean>(false);
readonly errorField = input<any>();
readonly errortxt = input<string>();
readonly errortxt2 = input<string>();
readonly errortxt3 = input<string>();
readonly otherError = input<boolean>();
}

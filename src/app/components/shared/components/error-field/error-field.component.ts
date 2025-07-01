import { Component, input } from '@angular/core';

@Component({
  selector: 'app-error-field',
  imports: [],
  templateUrl: './error-field.component.html',
  styleUrl: './error-field.component.scss',
})
export class ErrorFieldComponent {
  // error
  readonly formValidation = input<boolean>(false);
  readonly errorField = input<any>();
  readonly otherError = input<boolean>();

  readonly errortxtRequired = input<string>();
  readonly errortxtPattern = input<string>();
  readonly errortxtMin = input<string>();
  readonly errortxtMax = input<string>();
  readonly errortxtOther = input<string>();
}

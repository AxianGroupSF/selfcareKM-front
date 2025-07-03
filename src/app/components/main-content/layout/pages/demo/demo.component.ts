import { Component } from '@angular/core';
import { AllfieldsComponent } from '../../../../shared/components/allfields/allfields.component';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DefaultButtonComponent } from '../../../../shared/components/default-button/default-button.component';
import { ErrorType } from '../../../../shared/models/allfields';

@Component({
  selector: 'app-demo',
  imports: [AllfieldsComponent, DefaultButtonComponent],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.scss',
})
export class DemoComponent {
  formDefault: FormGroup = new FormGroup({
    text: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/),
      Validators.minLength(3),
      Validators.maxLength(13),
    ]),
    pass: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(12),
    ]),
    long: new FormControl('', [Validators.required]),
  });
  formValidation = false;
  dateform(event: any) {
    // this.checkForm();
  }
  onAction() {
    this.checkForm();
  }
  checkForm() {
    this.formValidation = this.formDefault.invalid;
  }
  testError(field: any, errorTypes: ErrorType[]): boolean {
    if (!field) return false;

    const isInteracted = field.dirty || field.touched || this.formValidation;
    const hasAnyError = errorTypes.some((error) => field.hasError(error));
    return isInteracted && hasAnyError;
  }
}

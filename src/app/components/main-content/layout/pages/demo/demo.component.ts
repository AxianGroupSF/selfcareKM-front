import { Component } from '@angular/core';
import { AllfieldsComponent } from '../../../../shared/components/allfields/allfields.component';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DefaultButtonComponent } from '../../../../shared/components/default-button/default-button.component';

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
  });
  formValidation = false;
  dateform(event: any) {
    this.checkForm();
  }
  onAction() {
    console.log(this.formDefault.controls['text'].errors);
    this.checkForm();
  }
  checkForm() {
    if (this.formDefault.invalid) {
      this.formValidation = true;
    } else {
      this.formValidation = false;
    }
  }
  testError(field: any): boolean {
    const errorTypes = ['required', 'pattern', 'minlength', 'maxlength'];

    if (!field) return false;

    const isInteracted = field.dirty || field.touched;
    const hasAnyError = errorTypes.some((error) => field.hasError(error));

    return isInteracted && hasAnyError;
  }
}

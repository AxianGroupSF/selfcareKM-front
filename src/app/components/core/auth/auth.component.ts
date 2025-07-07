import { Component } from '@angular/core';
import { AllfieldsComponent } from '../../shared/components/allfields/allfields.component';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ErrorType } from '../../shared/models/allfields';
import { DefaultButtonComponent } from '../../shared/components/default-button/default-button.component';

@Component({
    selector: 'app-auth',
    imports: [AllfieldsComponent, DefaultButtonComponent],
    templateUrl: './auth.component.html',
    styleUrl: './auth.component.scss'
})
export class AuthComponent {
  formDefault: FormGroup = new FormGroup({
    login: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)
    ]),
    password: new FormControl('', [
      Validators.required
    ])
  });

  showPassword = false;
  errorMessage = '';

  formValidation = false;

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  dateform(event: any){
    if (event === 'toggle-password') {
      this.togglePasswordVisibility();
    }
  }

  stateIcon(state:boolean) {
    this.showPassword = state;    
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

  login(){
    this.checkForm();
  }
}

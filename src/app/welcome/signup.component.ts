import { Component, EventEmitter, Output } from '@angular/core';

import { NgForm } from '@angular/forms';

import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css', './shared.css'],
})
export class SignupComponent {
  enteredEmail: string = '';
  password: string = '';
  confirmPassword: string = '';
  passwordMatchError: boolean = false;
  passwordLengthError: boolean = false;
  isSubmitted: boolean = false;

  constructor(private router: Router) {}

  onSwitchToLogin() {
    this.router.navigate(['/']);
  }

  isEmailValid(): boolean {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.enteredEmail))
      return true;

    return false;
  }

  checkPasswordMatch() {
    this.isSubmitted = false;
    this.passwordMatchError = this.password !== this.confirmPassword;
  }

  isPasswordLengthValid(): boolean {
    return this.password.length >= 6 && this.password.length <= 20;
  }

  onSubmit(form: NgForm) {
    const passwordLengthValid: boolean = this.isPasswordLengthValid();

    if (passwordLengthValid && this.password !== this.confirmPassword) {
      this.isSubmitted = true;
      this.passwordMatchError = true;
      this.passwordLengthError = false;
    }

    if (!passwordLengthValid && this.password === this.confirmPassword) {
      this.isSubmitted = true;
      this.passwordMatchError = false;
      this.passwordLengthError = true;
    }

    if (!passwordLengthValid && this.password !== this.confirmPassword) {
      this.isSubmitted = true;
      this.passwordMatchError = true;
      this.passwordLengthError = true;
    }

    if (passwordLengthValid && this.password === this.confirmPassword) {
      this.router.navigate(['home']);
    }
  }
}

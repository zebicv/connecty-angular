import { Component, EventEmitter, Output } from '@angular/core';

import { NgForm } from '@angular/forms';

import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  password: string = '';
  confirmPassword: string = '';
  passwordMatchError: boolean = false;
  isSubmitted: boolean = false;

  constructor(private router: Router) {}

  onSwitchToLogin() {
    this.router.navigate(['/']);
  }

  checkPasswordMatch() {
    this.isSubmitted = false;
    this.passwordMatchError = this.password !== this.confirmPassword;
  }

  onSubmit(form: NgForm) {
    console.log(form.value);

    if (this.password === this.confirmPassword) {
      // console.log('passwords match');
      this.router.navigate(['home']);
    } else {
      this.isSubmitted = true;
      this.passwordMatchError = true;
    }
  }
}

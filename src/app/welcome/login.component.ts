import { Component, EventEmitter, Output } from '@angular/core';

import { NgForm } from '@angular/forms';

import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private router: Router) {}

  onSwitchToSignUp() {
    this.router.navigate(['/signup']);
  }

  onSubmit(form: NgForm) {
    const value = form.value;
    console.log(value);
    form.reset();
  }
}

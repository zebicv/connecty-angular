import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
})
export class SignupComponent {
  @Output() switchToLogin = new EventEmitter<any>();

  onSwitchToLogin() {
    this.switchToLogin.emit();
  }
}

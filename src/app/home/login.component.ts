import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  @Output() switchLogin = new EventEmitter<any>();

  onSwitchToSignUp() {
    this.switchLogin.emit();
  }
}

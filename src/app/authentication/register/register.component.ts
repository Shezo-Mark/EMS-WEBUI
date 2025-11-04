import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  public showPassword: boolean = false;
  email = '';
  password = '';
  message = '';
  errorMessage = ''; // validation error handle
  error: { name: string; message: string } = { name: '', message: '' }; // for firbase error handle

  constructor( private router: Router) {}

  ngOnInit(): void {}

  clearErrorMessage() {
    this.errorMessage = '';
    this.error = { name: '', message: '' };
  }


  validateForm(email: string, password: string) {
    if (email.length === 0) {
      this.errorMessage = 'please enter email id';
      return false;
    }

    if (password.length === 0) {
      this.errorMessage = 'please enter password';
      return false;
    }

    if (password.length < 6) {
      this.errorMessage = 'password should be at least 6 char';
      return false;
    }

    this.errorMessage = '';
    return true;
  }
  public TogglePassword() {
    this.showPassword = !this.showPassword;
  }
}

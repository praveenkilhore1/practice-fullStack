import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  username: string = '';
  password: string = '';
  error: string = '';

  constructor(private router: Router) {}

  login(){

    if (this.username === 'user' && this.password === 'password') {
      // Redirect to home page upon successful login
      this.router.navigate(['/']);
    } else {
      // Display error message for incorrect credentials
      this.error = 'Invalid username or password. Please try again.';
    }
  }
}

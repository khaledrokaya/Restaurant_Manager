import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../shared/data.service';
import { AuthService } from '../shared/auth.service';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  loginError: string = '';
  isLoading = false;

  constructor(
    private formbuilder: FormBuilder,
    private _router: Router,
    private dataService: DataService,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    // Redirect if already logged in
    if (this.authService.isLoggedIn()) {
      this._router.navigate(['/dashboard']);
      return;
    }

    this.loginForm = this.formbuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  logIn() {
    if (this.loginForm.valid) {
      this.isLoading = true;
      this.loginError = '';
      const { email, password } = this.loginForm.value;

      // Get users from data service
      const users = this.dataService.getUsers();
      const user = users.find((u: any) => u.email === email && u.password === password);

      if (user) {
        // Login successful - save to localStorage via auth service
        this.authService.login({
          id: user.id || Date.now(),
          name: user.name,
          email: user.email,
          mobile: user.mobile
        });

        this._router.navigate(['/dashboard']);
        this.loginForm.reset();
      } else {
        this.loginError = 'Invalid email or password';
      }
      this.isLoading = false;
    } else {
      this.loginError = 'Please fill all fields correctly.';
    }
  }

  // Getter methods for form validation
  get email() { return this.loginForm.get('email'); }
  get password() { return this.loginForm.get('password'); }
}



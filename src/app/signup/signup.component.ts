import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../shared/data.service';
import { AuthService } from '../shared/auth.service';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm!: FormGroup;
  signupError: string = '';
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

    this.signupForm = this.formbuilder.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      mobile: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    })
  }

  signUp() {
    if (this.signupForm.valid) {
      this.isLoading = true;
      this.signupError = '';
      const userData = this.signupForm.value;

      // Check if user already exists
      const users = this.dataService.getUsers();
      const existingUser = users.find((user: any) => user.email === userData.email);

      if (existingUser) {
        this.signupError = 'User with this email already exists!';
        this.isLoading = false;
        return;
      }

      // Add new user
      const newUser = {
        ...userData,
        id: Date.now()
      };
      this.dataService.addUser(newUser);

      // Auto login after successful signup
      this.authService.login({
        id: newUser.id,
        name: newUser.name,
        email: newUser.email,
        mobile: newUser.mobile
      });

      this.signupForm.reset();
      this._router.navigate(['/dashboard']);
    } else {
      this.signupError = 'Please fill all fields correctly.';
    }
  }

  // Getter methods for form validation
  get name() { return this.signupForm.get('name'); }
  get mobile() { return this.signupForm.get('mobile'); }
  get email() { return this.signupForm.get('email'); }
  get password() { return this.signupForm.get('password'); }
}
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DataService } from '../shared/data.service';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-add-restaurant',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './add-restaurant.component.html',
  styleUrls: ['./add-restaurant.component.css']
})
export class AddRestaurantComponent {
  restaurantForm!: FormGroup;
  isLoading = false;

  constructor(
    private fb: FormBuilder,
    private dataService: DataService,
    private authService: AuthService,
    private router: Router
  ) {
    // Check if user is logged in
    if (!this.authService.isLoggedIn()) {
      this.router.navigate(['/login']);
      return;
    }

    this.restaurantForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      address: ['', [Validators.required, Validators.minLength(10)]],
      mobile: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      services: ['', [Validators.required]]
    });
  }

  addRestaurant() {
    if (this.restaurantForm.valid) {
      this.isLoading = true;

      const newRestaurant = {
        ...this.restaurantForm.value,
        id: Date.now() // Simple ID generation
      };

      // Simulate loading delay
      setTimeout(() => {
        this.dataService.addRestaurent(newRestaurant);
        this.isLoading = false;
        alert('Restaurant added successfully!');
        this.restaurantForm.reset();
        this.router.navigate(['/dashboard']);
      }, 1500);
    } else {
      // Mark all fields as touched to show validation errors
      Object.keys(this.restaurantForm.controls).forEach(key => {
        this.restaurantForm.get(key)?.markAsTouched();
      });
    }
  }

  goBack() {
    this.router.navigate(['/dashboard']);
  }

  // Helper method to check if a field has an error
  hasError(fieldName: string, errorType: string): boolean {
    const field = this.restaurantForm.get(fieldName);
    return !!(field && field.hasError(errorType) && field.touched);
  }

  // Helper method to get error message
  getErrorMessage(fieldName: string): string {
    const field = this.restaurantForm.get(fieldName);
    if (field && field.touched && field.errors) {
      if (field.errors['required']) return `${fieldName} is required`;
      if (field.errors['email']) return 'Please enter a valid email';
      if (field.errors['minlength']) return `${fieldName} must be at least ${field.errors['minlength'].requiredLength} characters`;
      if (field.errors['pattern']) return 'Please enter a valid 10-digit mobile number';
    }
    return '';
  }

  // Getter methods for form validation
  get name() { return this.restaurantForm.get('name'); }
  get email() { return this.restaurantForm.get('email'); }
  get address() { return this.restaurantForm.get('address'); }
  get mobile() { return this.restaurantForm.get('mobile'); }
  get services() { return this.restaurantForm.get('services'); }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { DataService } from '../shared/data.service';
import { AuthService } from '../shared/auth.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-edit-restaurant',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './edit-restaurant.component.html',
  styleUrls: ['./edit-restaurant.component.css']
})
export class EditRestaurantComponent implements OnInit {
  editForm!: FormGroup;
  restaurantId!: number;
  isLoading = false;
  restaurant: any = null;

  constructor(
    private formBuilder: FormBuilder,
    private dataService: DataService,
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    // Check if user is logged in
    if (!this.authService.isLoggedIn()) {
      this.router.navigate(['/login']);
      return;
    }

    // Get restaurant ID from route
    this.restaurantId = Number(this.route.snapshot.paramMap.get('id'));

    // Get restaurant data
    this.restaurant = this.dataService.getRestaurentById(this.restaurantId);

    if (!this.restaurant) {
      alert('Restaurant not found!');
      this.router.navigate(['/dashboard']);
      return;
    }

    // Initialize form with restaurant data
    this.editForm = this.formBuilder.group({
      name: [this.restaurant.name, [Validators.required, Validators.minLength(2)]],
      email: [this.restaurant.email, [Validators.required, Validators.email]],
      mobile: [this.restaurant.mobile, [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      address: [this.restaurant.address, [Validators.required, Validators.minLength(10)]],
      services: [this.restaurant.services, [Validators.required]]
    });
  }

  onSubmit() {
    if (this.editForm.valid) {
      this.isLoading = true;

      const updatedRestaurant = {
        id: this.restaurantId,
        ...this.editForm.value
      };

      // Update restaurant data
      this.dataService.updateRestaurent(this.restaurantId, this.editForm.value);

      // Simulate loading delay
      setTimeout(() => {
        this.isLoading = false;
        alert('Restaurant updated successfully!');
        this.router.navigate(['/dashboard']);
      }, 1500);
    } else {
      // Mark all fields as touched to show validation errors
      Object.keys(this.editForm.controls).forEach(key => {
        this.editForm.get(key)?.markAsTouched();
      });
    }
  }

  // Helper method to check if a field has an error
  hasError(fieldName: string, errorType: string): boolean {
    const field = this.editForm.get(fieldName);
    return !!(field && field.hasError(errorType) && field.touched);
  }

  // Helper method to get error message
  getErrorMessage(fieldName: string): string {
    const field = this.editForm.get(fieldName);
    if (field && field.touched && field.errors) {
      if (field.errors['required']) return `${fieldName} is required`;
      if (field.errors['email']) return 'Please enter a valid email';
      if (field.errors['minlength']) return `${fieldName} must be at least ${field.errors['minlength'].requiredLength} characters`;
      if (field.errors['pattern']) return 'Please enter a valid 10-digit mobile number';
    }
    return '';
  }

  goBack() {
    this.router.navigate(['/dashboard']);
  }
}

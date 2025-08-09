import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DataService } from '../shared/data.service';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-restaurant-details',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './restaurant-details.component.html',
  styleUrls: ['./restaurant-details.component.css']
})
export class RestaurantDetailsComponent {
  restaurant: any;

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService,
    private authService: AuthService,
    private router: Router
  ) {
    // Check if user is logged in
    if (!this.authService.isLoggedIn()) {
      this.router.navigate(['/login']);
      return;
    }

    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.restaurant = this.dataService.getRestaurentById(id);
  }

  getServices(): string[] {
    if (this.restaurant && this.restaurant.services) {
      return this.restaurant.services.split(',').map((s: string) => s.trim());
    }
    return [];
  }

  goBack() {
    this.router.navigate(['/dashboard']);
  }

  editRestaurant() {
    if (this.restaurant) {
      this.router.navigate(['/restaurent/edit', this.restaurant.id]);
    }
  }
}

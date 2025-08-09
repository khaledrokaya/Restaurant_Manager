import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../shared/data.service';
import { AuthService } from '../shared/auth.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  restaurents: any[] = [];
  filteredRestaurents: any[] = [];
  searchTerm: string = '';

  constructor(
    private dataService: DataService,
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit() {
    // Check if user is logged in
    if (!this.authService.isLoggedIn()) {
      this.router.navigate(['/login']);
      return;
    }

    this.restaurents = this.dataService.getRestaurents();
    this.filteredRestaurents = [...this.restaurents];
  }

  goToDetails(id: number) {
    this.router.navigate(['/restaurent', id]);
  }

  goToAdd() {
    this.router.navigate(['/restaurent/add']);
  }

  deleteResto(id: number) {
    if (confirm('Are you sure you want to delete this restaurant?')) {
      this.dataService.deleteRestaurent(id);
      this.restaurents = this.dataService.getRestaurents();
      this.filterRestaurants();
      alert('Restaurant deleted successfully');
    }
  }

  editRestaurant(id: number) {
    this.router.navigate(['/restaurent/edit', id]);
  }

  // Filter restaurants based on search term
  filterRestaurants() {
    if (!this.searchTerm.trim()) {
      this.filteredRestaurents = [...this.restaurents];
    } else {
      this.filteredRestaurents = this.restaurents.filter(restaurant =>
        restaurant.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        restaurant.email.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        restaurant.address.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        restaurant.services.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }
  }

  // Sort restaurants by field
  sortBy(field: string) {
    this.filteredRestaurents.sort((a, b) => {
      const aValue = a[field].toLowerCase();
      const bValue = b[field].toLowerCase();
      return aValue.localeCompare(bValue);
    });
  }

  // Get active restaurants count (mock data for demo)
  getActiveRestaurants(): number {
    return Math.floor(this.restaurents.length * 0.8);
  }

  // Get city count (mock data for demo)
  getCityCount(): number {
    const cities = new Set(this.restaurents.map(r =>
      r.address.split(',').pop()?.trim().toLowerCase()
    ));
    return cities.size || 1;
  }

  // Export data functionality
  exportData() {
    const dataStr = JSON.stringify(this.filteredRestaurents, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'restaurants_data.json';
    link.click();
    URL.revokeObjectURL(url);
  }
}

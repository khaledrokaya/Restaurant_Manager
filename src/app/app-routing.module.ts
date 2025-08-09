import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SignupComponent } from './signup/signup.component';
import { LandingComponent } from './landing/landing.component';
import { AddRestaurantComponent } from './add-restaurant/add-restaurant.component';
import { RestaurantDetailsComponent } from './restaurant-details/restaurant-details.component';
import { EditRestaurantComponent } from './edit-restaurant/edit-restaurant.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'restaurent/add', component: AddRestaurantComponent },
  { path: 'restaurent/edit/:id', component: EditRestaurantComponent },
  { path: 'restaurent/:id', component: RestaurantDetailsComponent },
  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '404' }
];

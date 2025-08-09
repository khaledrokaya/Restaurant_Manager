import { Injectable } from '@angular/core';
import data from '../../assets/data.json';

@Injectable({ providedIn: 'root' })
export class DataService {
  users = (data as any).users;
  restaurents = (data as any).restaurents;

  getUsers() {
    return this.users;
  }

  getRestaurents() {
    return this.restaurents;
  }

  addUser(user: any) {
    const newId = this.users.length > 0 ? Math.max(...this.users.map((u: any) => u.id || 0)) + 1 : 1;
    this.users.push({ ...user, id: newId });
  }

  addRestaurent(resto: any) {
    const newId = this.restaurents.length > 0 ? Math.max(...this.restaurents.map((r: any) => r.id)) + 1 : 1;
    this.restaurents.push({ ...resto, id: newId });
  }

  getRestaurentById(id: number) {
    return this.restaurents.find((r: any) => r.id === id);
  }

  deleteRestaurent(id: number) {
    const index = this.restaurents.findIndex((r: any) => r.id === id);
    if (index > -1) {
      this.restaurents.splice(index, 1);
    }
  }

  updateRestaurent(id: number, updatedData: any) {
    const index = this.restaurents.findIndex((r: any) => r.id === id);
    if (index > -1) {
      this.restaurents[index] = { ...this.restaurents[index], ...updatedData };
    }
  }
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface User {
  firstName: string;
  lastName: string;
  email: string;
  isActive: boolean;
}

@Component({
  selector: 'app-add-user',
  standalone: true,
  imports: [CommonModule, FormsModule], // ✅ Needed for [(ngModel)]
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})

export class AddUserComponent {
  user: User = {
    firstName: '',
    lastName: '',
    email: '',
    isActive: false
  };

  users: User[] = [];

  addUser() {
    this.users.push({ ...this.user }); // Copy the user
    // Reset the form
    this.user = {
      firstName: '',
      lastName: '',
      email: '',
      isActive: false
    };
  }
}
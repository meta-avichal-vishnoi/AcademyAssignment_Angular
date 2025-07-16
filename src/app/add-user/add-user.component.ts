import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserLogService } from '../user-log.service'; // ✅ Import the service

interface User {
  firstName: string;
  lastName: string;
  email: string;
  isActive: boolean;
}

@Component({
  selector: 'app-add-user',
  standalone: true,
  imports: [CommonModule, FormsModule],
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

  constructor(private userLogService: UserLogService) {} 

  addUser() {
    this.users.push({ ...this.user });

    this.userLogService.logMyDetail(this.user);

    // Reset form
    this.user = {
      firstName: '',
      lastName: '',
      email: '',
      isActive: false
    };
  }
}
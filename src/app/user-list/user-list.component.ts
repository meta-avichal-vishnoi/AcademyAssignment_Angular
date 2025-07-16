import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IUser } from '../models/user.model'; // ✅ Make sure path is correct

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  users: IUser[] = [
    { firstName: 'Rohan', lastName: 'Sharma', email: 'rohan.sharma@gmail.com', isActive: true },
    { firstName: 'Rahul', lastName: 'Verma', email: 'rahul.verma@gmail.com', isActive: true },
    { firstName: 'Vikas', lastName: 'Khandelwal', email: 'vikas.khandelwal@gmail.com', isActive: true },
    { firstName: 'Sumit', lastName: 'Roy', email: 'sumit.roy@gmail.com', isActive: true },
    { firstName: 'Piyush', lastName: 'Choudhary', email: 'piyush.choudhary@gmail.com', isActive: true }
  ];

  selectedUser: IUser = this.users[0];

  showDetails(user: IUser) {
    this.selectedUser = user;
  }
}
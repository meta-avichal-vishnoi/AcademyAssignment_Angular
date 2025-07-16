import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' 
})
export class UserLogService {
  constructor() {}

  logMyDetail(user: any) {
    console.log('User Detail Logged:', user);
  }
}
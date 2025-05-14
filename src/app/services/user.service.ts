import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

    userList: User[] = [
      new User(1,'User 1', 'user1', 'password1'),
      new User(2,'User 2', 'user2', 'password2'),
      new User(3,'User 3', 'user3', 'password3')
    ];
}

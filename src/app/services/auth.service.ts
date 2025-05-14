import { inject, Injectable } from '@angular/core';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userService: UserService = inject(UserService);

  isLoggedIn: boolean = false;

  login(username: string, password: string) {
    let user = this.userService.userList.find(user => user.username === username && user.password === password);

    if (user === undefined) {
      this.isLoggedIn = false;
    } else {
      this.isLoggedIn = true;
    }
    return user;
  }

  logout(){
    this.isLoggedIn = false;
  }

}

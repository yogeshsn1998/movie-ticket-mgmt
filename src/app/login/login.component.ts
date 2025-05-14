import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  @ViewChild('username')
  username!: ElementRef;
  @ViewChild('password')
  password!: ElementRef;

  authService: AuthService = inject(AuthService);
  
  router: Router=inject(Router)

  authenticate() {
    const username = this.username.nativeElement.value;
    const password = this.password.nativeElement.value;

    let user = this.authService.login(username, password);

    if(user === undefined){
      alert('Login failed');
    } else{
      alert('Login successful. Welcome! '+ user.name);
      this.router.navigate(['/']);

    }

  }

}

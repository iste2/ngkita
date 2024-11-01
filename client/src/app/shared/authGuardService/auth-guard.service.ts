import { Injectable } from '@angular/core';
import {
  CanActivate,
  Router,
} from '@angular/router';
import {AuthService} from '../authService/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {
  }

  async canActivate(): Promise<boolean> {
    const isLoggedIn = await this.authService.tryFetchLoggedInUser();
    if (!isLoggedIn) {
      await this.router.navigate(['/login']);
    }
    return isLoggedIn;
  }
}

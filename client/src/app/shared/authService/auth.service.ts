import {Injectable} from '@angular/core';
import {Models} from 'appwrite';
import {account} from '../../../shared/appwrite';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: Models.User<Models.Preferences> | null = null;

  async login(email: string, password: string) {
    try {
      if(await this.isUserLoggedIn()) {
        console.log('Logging out current user before logging in.');
        await this.logout();
      }
      await account.createEmailPasswordSession(email, password);
      this.user = await this.getLoggedInUser();
      console.log('Logged in');
    } catch (e) {
      console.log('Error logging in: ' + e);
    }
  }

  async logout() {
    try {
      await account.deleteSession('current');
      this.user = null;
      localStorage.removeItem('session');
      localStorage.removeItem('user');
    } catch (e) {
      console.log('Error logging out: ' + e);
    }
  }

  async tryFetchLoggedInUser() {
    this.user = await this.getLoggedInUser();
    return !!this.user;
  }

  async isUserLoggedIn(): Promise<boolean> {
    const user = await this.getLoggedInUser();
    return !!user;
  }

  async getLoggedInUser(): Promise<Models.User<Models.Preferences> | null> {
    try {
      const user = await account.get();
      console.log('Logged in user found: ' + user.email);
      return user;
    } catch (e) {
      console.log('No logged in user found: ' + e);
      return null;
    }
  }
}

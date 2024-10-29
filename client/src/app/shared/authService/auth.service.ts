import { Injectable } from '@angular/core';
import {Models} from 'appwrite';
import {account} from '../../../shared/appwrite';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  session: Models.Session | null = null;
  user: Models.User<Models.Preferences> | null = null;

  constructor() {
    localStorage.getItem('session') && (this.session = JSON.parse(localStorage.getItem('session') as string));
    localStorage.getItem('user') && (this.user = JSON.parse(localStorage.getItem('user') as string));
  }

  async login(email: string, password: string) {
    try {
      if(await this.isLoggedIn()) {
        console.log('Logging out current user before logging in.');
        await this.logout();
      }
      this.session = await account.createEmailPasswordSession(email, password);
      this.user = await this.getLoggedInUser();
      localStorage.setItem('session', JSON.stringify(this.session));
      localStorage.setItem('user', JSON.stringify(this.user));
      console.log('Logged in');
    } catch (e) {
      console.log('Error logging in: ' + e);
    }
  }

  async logout() {
    try {
      await account.deleteSession('current');
      this.session = null;
      this.user = null;
      localStorage.removeItem('session');
      localStorage.removeItem('user');
    } catch (e) {
      console.log('Error logging out: ' + e);
    }
  }

  async isLoggedIn() {
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

import { Injectable } from '@angular/core';
import {Models} from 'appwrite';
import {account} from '../../../shared/appwrite';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  session: Models.Session | null = null;
  user: Models.User<Models.Preferences> | null = null;

  constructor() { }

  async login(email: string, password: string) {
    try {
      if(await this.isLoggedIn()) {
        console.log('Logging out current user before logging in.');
        await this.logout();
      }
      this.session = await account.createEmailPasswordSession(email, password);
      this.user = await this.getLoggedInUser();
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

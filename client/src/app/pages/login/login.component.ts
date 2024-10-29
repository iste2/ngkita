import { Component } from '@angular/core';
import {AuthService} from '../../shared/authService/auth.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  loginForm: FormGroup;

  constructor(formBuilder: FormBuilder, private authService: AuthService, private router: Router) {
    this.loginForm = formBuilder.group({
      email: '',
      password: ''
    });
  }

  async login() {
    this.authService
      .login(this.loginForm.value.email, this.loginForm.value.password)
      .then(() => {
        this.loginForm.reset();
        this.router.navigate(['/']);
      });
  }

}

import { Component } from '@angular/core';
import {AuthService} from './shared/authService/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ngkita';

  constructor(public authService: AuthService) { }
}

import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { AuthService } from '../../shared/authService/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent implements OnInit {
  items: MenuItem[] | undefined;

  constructor(
    public authService: AuthService,
    private routerService: Router,
  ) {}

  ngOnInit(): void {
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-fw pi-home',
        route: '/',
      },
      {
        label: 'Bedarfsplanung',
        icon: 'pi pi-fw pi-bullseye',
        route: '/demandplanning',
      },
      {
        label: 'Kapazitätsplanung',
        icon: 'pi pi-fw pi-chart-bar',
        items: [
          {
            label: 'Übersicht',
            route: '/meetingneedsoverview',
          },
          {
            label: 'Details',
            route: '/meetingneedsdetails',
          },
        ],
      },
      {
        label: 'Login',
        icon: 'pi pi-fw pi-user',
        route: '/login',
      },
    ];
  }

  async logout() {
    await this.authService.logout();
    await this.routerService.navigate(['/']);
  }
}

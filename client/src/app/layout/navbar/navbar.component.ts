import {Component, OnInit} from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {

  items: MenuItem[] | undefined;

  ngOnInit(): void {
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-fw pi-home',
        route: "/"
      },
      {
        label: 'Meeting Needs',
        icon: 'pi pi-fw pi-chart-bar',
        route: "/meetingneeds"
      },
      {
        label: 'Login',
        icon: 'pi pi-fw pi-user',
        route: "/login"
      }
    ];
  }

}

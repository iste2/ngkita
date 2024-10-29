import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import {InputTextModule} from 'primeng/inputtext';
import {Button, ButtonDirective} from 'primeng/button';
import {Ripple} from 'primeng/ripple';
import { NavbarComponent } from './layout/navbar/navbar.component';
import {BadgeModule} from 'primeng/badge';
import {MenubarModule} from 'primeng/menubar';
import {AvatarModule} from 'primeng/avatar';
import {IconFieldModule} from 'primeng/iconfield';
import {InputIconModule} from 'primeng/inputicon';
import { MeetingneedsComponent } from './pages/meetingneeds/meetingneeds.component';
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    MeetingneedsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InputTextModule,
    ButtonDirective,
    Ripple,
    BadgeModule,
    MenubarModule,
    AvatarModule,
    IconFieldModule,
    InputIconModule,
    ReactiveFormsModule,
    Button
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

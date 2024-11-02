import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { InputTextModule } from 'primeng/inputtext';
import { Button, ButtonDirective } from 'primeng/button';
import { Ripple } from 'primeng/ripple';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { BadgeModule } from 'primeng/badge';
import { MenubarModule } from 'primeng/menubar';
import { AvatarModule } from 'primeng/avatar';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { MeetingneedsComponent } from './pages/meetingneeds/meetingneeds.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MultiSelectModule } from 'primeng/multiselect';
import { CheckboxModule } from 'primeng/checkbox';
import { ChartModule } from 'primeng/chart';
import { CardModule } from 'primeng/card';
import { PanelModule } from 'primeng/panel';
import { TagModule } from 'primeng/tag';
import { CalendarModule } from 'primeng/calendar';
import { ToolbarModule } from 'primeng/toolbar';
import { DemandplanningComponent } from './pages/demandplanning/demandplanning.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    MeetingneedsComponent,
    DemandplanningComponent,
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
    Button,
    TableModule,
    BrowserModule,
    BrowserAnimationsModule,
    MultiSelectModule,
    FormsModule,
    CheckboxModule,
    ChartModule,
    CardModule,
    PanelModule,
    TagModule,
    CalendarModule,
    ToolbarModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { MeetingneedsComponent } from './pages/meetingneeds/meetingneeds.component';
import { AuthGuardService } from './shared/authGuardService/auth-guard.service';
import { DemandplanningComponent } from './pages/demandplanning/demandplanning.component';
import { MeetingneedsoverviewComponent } from './pages/meetingneedsoverview/meetingneedsoverview.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: MeetingneedsComponent,
    canActivate: [AuthGuardService],
  },
  { path: 'login', component: LoginComponent },
  {
    path: 'meetingneedsdetails',
    component: MeetingneedsComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'meetingneedsoverview',
    component: MeetingneedsoverviewComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'demandplanning',
    component: DemandplanningComponent,
    canActivate: [AuthGuardService],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

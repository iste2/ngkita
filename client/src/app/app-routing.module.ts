import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { MeetingneedsComponent } from './pages/meetingneeds/meetingneeds.component';
import { AuthGuardService } from './shared/authGuardService/auth-guard.service';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: MeetingneedsComponent,
    canActivate: [AuthGuardService],
  },
  { path: 'login', component: LoginComponent },
  {
    path: 'meetingneeds',
    component: MeetingneedsComponent,
    canActivate: [AuthGuardService],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './pages/login/login.component';
import {MeetingneedsComponent} from './pages/meetingneeds/meetingneeds.component';

const routes: Routes = [
  {path: "login", component: LoginComponent},
  {path: "meetingneeds", component: MeetingneedsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './modules/dashboard/components/dashboard/dashboard.component';
import { LoginPageComponent } from './shared/components/login-page/login-page.component';
import { SignupPageComponent } from './shared/components/signup-page/signup-page.component';
import { EventDetailComponent } from './event-detail/event-detail.component'

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent},
  { path: '', component: SignupPageComponent},
  { path: 'login', component: LoginPageComponent},
  { path: 'eventdetail', component: EventDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
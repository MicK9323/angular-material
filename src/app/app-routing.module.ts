import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SigninComponent} from './auth/signin/signin.component';
import {SignupComponent} from './auth/signup/signup.component';
import {NofoundComponent} from './error/nofound/nofound.component';
import {DashboardComponent} from './pages/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {path: 'dashboard', component: DashboardComponent}
    ]
  },
  {path: 'signin', component: SigninComponent},
  {path: 'signup', component: SignupComponent},
  {path: '**', component: NofoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

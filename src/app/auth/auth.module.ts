import {NgModule} from '@angular/core';
import {SigninComponent} from './signin/signin.component';
import {SignupComponent} from './signup/signup.component';
import {AuthRoutingModule} from './auth-routing.module';
import {RouterModule} from '@angular/router';
import {AuthComponent} from './auth.component';

@NgModule({
  declarations: [
    SigninComponent,
    SignupComponent,
    AuthComponent
  ],
  imports: [
    RouterModule,
    AuthRoutingModule,
  ],
  exports: [
    SigninComponent,
    SignupComponent
  ],
  providers: [],
})
export class AuthModule {
}

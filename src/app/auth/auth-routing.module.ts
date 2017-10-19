import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LoginRoutes } from './login/login.routing';
import { SignupRoutes } from './signup/signup.routing';
import { ProfileRoutes } from './profile/profile.routing';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'auth',
        children: [
          ...LoginRoutes,
          ...SignupRoutes,
          ...ProfileRoutes,
        ],
      },
    ]),
  ],
  exports: [
    RouterModule,
  ],
})

export class AuthRoutingModule { }

import { Routes } from '@angular/router';

import { SignupComponent } from './signup.component';
import { AnonymousGuard } from '../guards/';
import { TranslationGuard } from '../../shared/translation/';

export const SignupRoutes: Routes = [
  {
    path: 'signup',
    component: SignupComponent,
    canActivate: [
      AnonymousGuard,
      TranslationGuard,
    ],
  },
];

import { Routes } from '@angular/router';

import { NavbarComponent } from './navbar.component';
import { LocaleResolver } from './resolves/locale.resolver';
import { TranslationGuard } from '../../shared/translation/guards/translation.guard';

export const LayoutNavbarRoutes: Routes = [
  {
    path: '',
    component: NavbarComponent,
    outlet: 'app-navbar',
    resolve: {
      locales: LocaleResolver,
    },
    canActivate: [
      TranslationGuard,
    ],
    data: {
      translation: {
        domain: 'layout',
        common: true,
      },
    }
  },
];

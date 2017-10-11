import { Routes } from '@angular/router';

import { NavbarComponent } from './navbar.component';

export const LayoutNavbarRoutes: Routes = [
  {
    path: '',
    component: NavbarComponent,
    outlet: 'navbar',
  },
];

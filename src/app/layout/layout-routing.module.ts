import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LayoutFooterRoutes, LayoutNavbarRoutes, LayoutSidenavRoutes } from './index';

@NgModule({
  imports: [
    RouterModule.forChild([
      ...LayoutFooterRoutes,
      ...LayoutNavbarRoutes,
      ...LayoutSidenavRoutes,
    ]),
  ],
  exports: [
    RouterModule,
  ],
})

export class LayoutRoutingModule { }

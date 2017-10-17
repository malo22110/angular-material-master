import { NgModule, ViewChild } from '@angular/core';



import { FooterModule } from './footer/footer.module';
import { NavbarModule } from './navbar/navbar.module';
import { SidenavModule } from './sidenav/sidenav.module';
import { SidenavService } from './sidenav/sidenav.service';
import { SharedModule } from '../shared/shared.module';
import { LayoutRoutingModule } from './layout-routing.module';


@NgModule({
  imports: [
    FooterModule,
    NavbarModule,
    SidenavModule,
    LayoutRoutingModule
  ],
 exports: [
  SidenavModule,
  NavbarModule
  ]
})
export class LayoutModule {
}

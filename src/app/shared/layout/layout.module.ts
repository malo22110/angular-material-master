import { NgModule, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { FooterComponent } from './footer/footer.component';
import { MaterialModule } from '../material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SidenavService } from './sidenav/sidenav.service';


@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule
  ],
  declarations: [NavbarComponent, SidenavComponent, FooterComponent],
  exports: [
    SidenavComponent,
    FooterComponent,
    NavbarComponent
  ]
})
export class LayoutModule {
}

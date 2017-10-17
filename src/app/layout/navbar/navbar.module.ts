import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';
import { NavbarComponent, LocaleResolver } from './index';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    NavbarComponent,
  ],
  exports: [
    NavbarComponent,
  ],
  providers: [
    LocaleResolver,
  ]
})

export class NavbarModule { }

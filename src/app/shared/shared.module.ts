import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from './layout/layout.module';
import { MaterialModule } from './material/material.module';


@NgModule({
  imports: [
    CommonModule,
    LayoutModule,
    MaterialModule
  ],
  declarations: []
})
export class SharedModule { }

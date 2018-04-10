import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { LayoutModule } from './layout/layout.module';
import { MaterialModule } from './material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    LayoutModule,
    MaterialModule,
    FlexLayoutModule
  ],
  declarations: [],
  exports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    LayoutModule,
    MaterialModule,
    FlexLayoutModule
  ]
})
export class SharedModule { }

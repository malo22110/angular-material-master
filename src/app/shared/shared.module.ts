import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { Ng2Webstorage } from 'ng2-webstorage';

import 'hammerjs';

import { Services } from './services/';
import { MaterialModule } from './material/material.module';
import { TranslationModule } from './translation/translation.module';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    RouterModule,
    MaterialModule,
    FlexLayoutModule,
    Ng2Webstorage,
    TranslationModule,
  ],
  providers: [
    {
      provide: 'Window',
      useValue: window,
    },
    ...Services,
  ],
  exports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    RouterModule,
    MaterialModule,
    FlexLayoutModule,
    Ng2Webstorage,
    TranslationModule,
  ],
})
export class SharedModule { }

import './polyfills';

import {CdkTableModule} from '@angular/cdk/table';
import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {
    MatDatepickerModule,
    MatInputModule
} from '@angular/material';
import {BrowserModule} from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DatepickerValueExample} from './app/datepicker-value-example';

import {SatNativeDateModule, SatDatepickerModule} from 'saturn-datepicker';



@NgModule({
  imports: [
      BrowserModule,
      BrowserAnimationsModule,
      FormsModule,
      MatDatepickerModule,
      MatInputModule,
      SatNativeDateModule,
      SatDatepickerModule,


  ],
  declarations: [DatepickerValueExample],
  bootstrap: [DatepickerValueExample],
  providers: []
})
export class AppModule {}


import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialComponentModule } from './material-component/material-component.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { CommonModule } from './common/common.module';
import { AppRoutingModule } from './/app-routing.module';
import {PublicPagesModule} from './public-pages/public-pages.module'


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MaterialComponentModule,
    BrowserAnimationsModule,
    CommonModule,
    AppRoutingModule,
    PublicPagesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

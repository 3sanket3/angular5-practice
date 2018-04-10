import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialComponentModule } from './material-component/material-component.module';


import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MaterialComponentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

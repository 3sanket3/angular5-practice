import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashaboardComponent } from './dashaboard/dashaboard.component';
import { MaterialComponentModule } from '../material-component/material-component.module';
import { AppRoutingModule } from '../app-routing.module';
import {CommonModule as CommonComponent} from '../common/common.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialComponentModule,
    CommonComponent,
    AppRoutingModule
  ],
  exports:[DashaboardComponent],
  declarations: [DashaboardComponent]
})
export class PrivatePagesModule { }

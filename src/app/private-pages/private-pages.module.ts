import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashaboardComponent } from './dashaboard/dashaboard.component';
import { MaterialComponentModule } from '../material-component/material-component.module';
import { AppRoutingModule } from '../app-routing.module';
import {CommonModule as CommonComponent} from '../common/common.module';
import { BillComponent } from './bill/bill.component';
import { BillService } from './bill/bill.service';

@NgModule({
  imports: [
    CommonModule,
    MaterialComponentModule,
    CommonComponent,
    AppRoutingModule
  ],
  exports:[DashaboardComponent],
  declarations: [DashaboardComponent, BillComponent],
  providers: [BillService]
})
export class PrivatePagesModule { }

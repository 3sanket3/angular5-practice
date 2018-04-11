import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule, 
  MatCheckboxModule,
  MatSidenavModule,
  MatIconModule} from '@angular/material';

import {MatDividerModule} from "@angular/material/divider"

@NgModule({
  imports: [
    CommonModule,MatButtonModule, MatCheckboxModule,MatSidenavModule,MatIconModule,MatDividerModule
  ],
  exports : [MatButtonModule, MatCheckboxModule,MatSidenavModule,MatIconModule,MatDividerModule],
  declarations: []
})
export class MaterialComponentModule { }

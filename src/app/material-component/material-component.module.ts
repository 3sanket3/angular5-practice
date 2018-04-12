import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule, 
  MatCheckboxModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule} from '@angular/material';

import {MatDividerModule} from "@angular/material/divider"

@NgModule({
  imports: [
    CommonModule,MatButtonModule, MatCheckboxModule,MatSidenavModule,MatIconModule,MatDividerModule,
    MatListModule

  ],
  exports : [MatButtonModule, MatCheckboxModule,MatSidenavModule,MatIconModule,MatDividerModule,
    MatListModule],
  declarations: []
})
export class MaterialComponentModule { }

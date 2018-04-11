import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule, MatCheckboxModule,MatSidenavModule,MatIconModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,MatButtonModule, MatCheckboxModule,MatSidenavModule,MatIconModule
  ],
  exports : [MatButtonModule, MatCheckboxModule,MatSidenavModule,MatIconModule],
  declarations: []
})
export class MaterialComponentModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule, MatCheckboxModule,MatSidenavModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,MatButtonModule, MatCheckboxModule,MatSidenavModule
  ],
  exports : [MatButtonModule, MatCheckboxModule,MatSidenavModule],
  declarations: []
})
export class MaterialComponentModule { }

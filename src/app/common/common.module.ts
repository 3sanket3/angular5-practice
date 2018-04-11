import { NgModule } from '@angular/core';
import { AvatarComponent } from './avatar/avatar.component';
import { BadgeComponent } from './badge/badge.component';

@NgModule({
  imports: [
    
  ],
  exports:[AvatarComponent,BadgeComponent],
  declarations: [AvatarComponent, BadgeComponent]
})
export class CommonModule { }

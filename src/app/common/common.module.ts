import { NgModule } from '@angular/core';
import { AvatarComponent } from './avatar/avatar.component';
import { BadgeComponent } from './badge/badge.component';
import { CollapsibleComponent } from './collpsible/collpsible.component';

@NgModule({
  imports: [
    
  ],
  exports:[AvatarComponent,BadgeComponent,CollapsibleComponent],
  declarations: [AvatarComponent, BadgeComponent, CollapsibleComponent]
})
export class CommonModule { }

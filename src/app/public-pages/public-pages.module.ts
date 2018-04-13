import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports:[ContactFormComponent],
  declarations: [ContactFormComponent, HomeComponent]
})
export class PublicPagesModule { }

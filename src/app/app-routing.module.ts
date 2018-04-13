import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ContactFormComponent } from "./public-pages/contact-form/contact-form.component";
import { HomeComponent } from "./public-pages/home/home.component";

const routes: Routes = [
  {path:'',component : HomeComponent,pathMatch : 'full'},
  { path: "home", component: HomeComponent },
  { path: "contact", component: ContactFormComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {}

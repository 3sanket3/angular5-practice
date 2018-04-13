import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ContactFormComponent } from "./public-pages/contact-form/contact-form.component";
import { HomeComponent } from "./public-pages/home/home.component";
import { DashaboardComponent } from "./private-pages/dashaboard/dashaboard.component";

const routes: Routes = [
  { path: "", redirectTo:"dashboard", pathMatch: "full" },
  {
    path: "dashboard",
    component: DashaboardComponent,
    children: [
      { path: "home", component: HomeComponent },
      { path: "contact", component: ContactFormComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {}

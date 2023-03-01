import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './layout/about-us/about-us.component';
import { ContactFormComponent } from './layout/contact-form/contact-form.component';
import { HomeComponent } from './layout/home/home.component';
import { StudentComponent } from './layout/student/student.component';

const routes: Routes = [{
  path:'home',
  component:HomeComponent
},
{
  path:'contact',
  component:ContactFormComponent
},
{
  path:'about-us',
  component:AboutUsComponent
},
{
  path:'student/:studentname',
  component:StudentComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

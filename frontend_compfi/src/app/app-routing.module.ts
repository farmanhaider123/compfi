import { LeadingComment } from '@angular/compiler';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingpageComponent } from './components/landingpage/landingpage.component';
import { NavComponent } from './components/nav/nav.component';
import { OtpPageComponent } from './components/otp-page/otp-page.component';

import { RegisComponent } from './components/regis/regis.component';
const routes: Routes = [

  { path: 'regis', component: RegisComponent },
  { path: '', component: LandingpageComponent },
  {path:'otp',component:OtpPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { ColorComponent } from './color/color.component';
import { CountryComponent } from './country/country.component';
const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'color', component: ColorComponent},
  { path: 'user', component: UserComponent},
  { path: 'country', component: CountryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

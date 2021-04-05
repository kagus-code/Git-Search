import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{LandingComponent} from './landing-page/landing/landing.component';
import{UserComponent} from './user/user.component';
import{RepositoryComponent} from './repository/repository.component'
const routes: Routes = [
  {path:'', component : LandingComponent},
  {path: 'repository', component: RepositoryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

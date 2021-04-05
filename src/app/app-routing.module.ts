import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{LandingComponent} from './landing-page/landing/landing.component';
import{UserComponent} from './user/user.component';
import{RepositoryComponent} from './repository/repository.component'









const routes: Routes = [

  //{ path: '', redirectTo: '/landing', pathMatch: 'full' },
  //{ path: 'landing', component: LandingComponent,
    //children: [
      //{ path: '', redirectTo: '/repository', pathMatch: 'full' },
     // { path: 'repository', component: RepositoryComponent }
    //] 
  //}


  { path: 'landing', component: LandingComponent},
  {path: 'user', component: UserComponent},
  {path: 'repository', component: RepositoryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

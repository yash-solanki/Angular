import { UsersComponent } from './users/users.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsereditformComponent } from './usereditform/usereditform.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full' },
  {path: 'viewuser', component: UsersComponent},
  {path : 'edit/:userid' , component: UsereditformComponent},
  {path : 'insert' , component: UsereditformComponent },
  {path : 'login' , component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

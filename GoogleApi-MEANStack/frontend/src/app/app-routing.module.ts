import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShowComponent } from './component/show/show.component';

const routes: Routes = [
  { path: 'show', component: ShowComponent },
  { path: '', redirectTo: 'show', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

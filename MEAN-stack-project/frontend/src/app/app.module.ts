import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { HttpClientModule } from '@angular/common/http';
import { MatToolbarModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './component/list/list.component';
import { EditComponent } from './component/edit/edit.component';
import { CreateComponent } from './component/create/create.component';

import { IssueService } from './issue.service'

const routes: Routes = [
  { path: 'create', component: CreateComponent },
  { path: 'edit/:id', component: EditComponent },
  { path: 'list', component: ListComponent },
  { path: '', redirectTo: 'list', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    EditComponent,
    CreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    MatToolbarModule
  ],
  providers: [IssueService],
  bootstrap: [AppComponent]
})
export class AppModule { }

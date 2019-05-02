import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FirstPageComponent } from './component/first-page/first-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Routes, RouterModule } from '@angular/router';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatToolbarModule,
  MatFormFieldModule,
   MatInputModule,
    MatOptionModule,
     MatSelectModule,
      MatIconModule,
       MatButtonModule,
        MatCardModule,
         MatTableModule,
          MatDividerModule,
           MatSnackBarModule,
          } from '@angular/material';

const routes: Routes = [
  {
    path: '**',
    redirectTo: '/first',
    pathMatch: 'full'
  },
  {
    path: 'first',
    component: FirstPageComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    FirstPageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatTableModule,
    MatDividerModule,
    MatSnackBarModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

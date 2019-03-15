import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ShowComponent } from './component/show/show.component';
import { HttpClientModule } from '@angular/common/http';
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
           MatSnackBarModule } from '@angular/material';

import { IssueService } from './issue.service';



@NgModule({
  declarations: [
    AppComponent,
    ShowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
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
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

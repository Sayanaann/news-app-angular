import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddnewsComponent } from './addnews/addnews.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ViewnewsComponent } from './viewnews/viewnews.component';
import { NavbarComponent } from './navbar/navbar.component';

const myRoute:Routes=[
  {
    path :"",
    component :AddnewsComponent
  },
  {
    path :"viewnews",
    component :ViewnewsComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    AddnewsComponent,
    ViewnewsComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

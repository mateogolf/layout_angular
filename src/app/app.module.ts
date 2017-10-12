import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HeaderCompComponent } from './header-comp/header-comp.component';
import { NavCompComponent } from './nav-comp/nav-comp.component';
import { MainCompComponent } from './main-comp/main-comp.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderCompComponent,
    NavCompComponent,
    MainCompComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { AddPageComponent } from './pages/blog/add-page/add-page.component';
import { EditPageComponent } from './pages/blog/edit-page/edit-page.component';
import { TablePageComponent } from './pages/blog/table-page/table-page.component';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BlogPageComponent } from './pages/blog-page/blog-page.component';
import { BlogHomePageComponent } from './pages/blog-home-page/blog-home-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    LoginPageComponent,
    NotFoundPageComponent,
    AddPageComponent,
    EditPageComponent,
    TablePageComponent,
    BlogPageComponent,
    BlogHomePageComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
